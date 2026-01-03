const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const { protect } = require('../middleware/authMiddleware');
const asyncHandler = require('express-async-handler');

// Get Progress
// Get Progress
router.get('/', protect, asyncHandler(async (req, res) => {
    let progress = await Progress.find({ user: req.user._id });
    if (!progress || progress.length === 0) {
        // Create default for Spanish
        const newProgress = await Progress.create({ user: req.user._id, language: 'es' });
        res.json([newProgress]);
    } else {
        res.json(progress);
    }
}));

// Update Progress (e.g. finish lesson)
router.post('/update', protect, asyncHandler(async (req, res) => {
    const { xp, lessonsCompleted } = req.body;
    let progress = await Progress.findOne({ user: req.user._id });

    if (progress) {
        progress.xp += xp || 0;
        progress.xp += xp || 0;
        if (lessonsCompleted) progress.lessonsCompleted = lessonsCompleted; // Update count
        if (req.body.completedLessons) {
            // Merge arrays unique
            const newLessons = req.body.completedLessons;
            progress.completedLessons = [...new Set([...progress.completedLessons, ...newLessons])];
            progress.lessonsCompleted = progress.completedLessons.length; // Sync count with array length
        }
        progress.lastLessonDate = new Date();
        const updatedProgress = await progress.save();
        res.json(updatedProgress);
    } else {
        res.status(404);
        throw new Error('Progress not found');
    }
}));

// Leaderboard
router.get('/leaderboard', asyncHandler(async (req, res) => {
    const leaderboard = await Progress.find({})
        .populate('user', 'username avatar')
        .sort({ xp: -1 })
        .limit(10);

    res.json(leaderboard.map(p => ({
        id: p.user._id,
        username: p.user.username,
        avatar: p.user.avatar,
        points: p.xp
    })));
}));

module.exports = router;
