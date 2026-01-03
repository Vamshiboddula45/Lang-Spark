const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    title: String,
    description: String,
    unit: { type: Number, required: true },
    order: { type: Number, required: true }, // Order within the unit
    status: { type: String, default: 'locked' }, // active, locked, completed
    color: { type: String, default: 'primary' },
    language: { type: String, default: 'es' },
    level: { type: String, default: 'Beginner' },
    teachingContent: String, // Markdown content
    isCustom: { type: Boolean, default: false },
    source: { type: String, default: 'manual' },
    mode: { type: String, enum: ['learn', 'situational'], default: 'learn' },
    questions: [{
        type: { type: String, default: 'multiple-choice' },
        prompt: String,
        options: [String],
        correctAnswer: mongoose.Schema.Types.Mixed,
        expectedSpeech: String,
        textToSpeak: String,
        xp: { type: Number, default: 10 }
    }]
});

module.exports = mongoose.model('Lesson', lessonSchema);
