const express = require('express');
const router = express.Router();
const { generateLessonContent } = require('../services/gemini');
const Lesson = require('../models/Lesson');
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware');

router.post('/ai/lesson', async (req, res) => {
    const { language, topic, level, mode = 'learn' } = req.body;

    try {
        const lessonData = await generateLessonContent(language, topic, level, mode);

        const langCode = (lessonData.language.length > 2)
            ? lessonData.language.substring(0, 2).toLowerCase()
            : lessonData.language.toLowerCase();

        const newLesson = new Lesson({
            title: lessonData.lessonTitle,
            description: lessonData.lessonObjective,
            unit: mode === 'learn' ? 99 : 100,
            order: 1,
            status: 'active',
            color: mode === 'learn' ? 'purple' : 'red',
            language: langCode,
            level: lessonData.level,
            teachingContent: lessonData.teachingContent,
            isCustom: true,
            source: mode === 'situational' ? 'gemini_situation' : 'gemini_learn',
            mode: mode,
            questions: lessonData.questions
        });

        const savedLesson = await newLesson.save();
        res.json(savedLesson);
    } catch (err) {
        console.error("[API] Error generating lesson:", err);
        res.status(500).json({ message: err.message });
    }
});

router.post('/complete-lesson', protect, async (req, res) => {
    // Ideally this uses req.user from auth middleware
    // But allowing fallback to body username if needed for migration from LingoClone logic
    const { username, lessonId, xp } = req.body;
    let user;

    try {
        if (req.user) {
            user = await User.findById(req.user._id);
        } else if (username) {
            user = await User.findOne({ username });
        }

        if (!user) return res.status(404).json({ message: 'User not found' });

        user.xp = (user.xp || 0) + xp;
        user.gems = (user.gems || 0) + 5; // Reward gems

        // Streak logic (simplified)
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const lastActive = user.lastActiveDate ? new Date(user.lastActiveDate) : null;
        if (lastActive) lastActive.setHours(0, 0, 0, 0);

        if (!lastActive || lastActive.getTime() !== today.getTime()) {
            if (lastActive && (today.getTime() - lastActive.getTime() === 86400000)) {
                user.streak = (user.streak || 0) + 1;
            } else {
                user.streak = 1;
            }
            user.lastActiveDate = new Date();
        }

        if (!user.completedLessons.includes(lessonId)) {
            user.completedLessons.push(lessonId);
        }

        await user.save();
        res.json({ success: true, xp: user.xp, gems: user.gems });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/lessons/:id', async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);
        if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
        res.json(lesson);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/user/:username/language', async (req, res) => {
    const { language } = req.body;
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.learningLanguage = language;
        if (!user.startedLanguages.includes(language)) {
            user.startedLanguages.push(language);
        }
        await user.save();
        res.json({ message: 'Language updated' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
