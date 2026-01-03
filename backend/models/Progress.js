const mongoose = require('mongoose');

const progressSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    language: { type: String, required: true }, // e.g., 'es' for Spanish
    xp: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    lastLessonDate: { type: Date },
    lessonsCompleted: { type: Number, default: 0 },
    completedLessons: { type: [String], default: [] }
}, { timestamps: true });

const Progress = mongoose.model('Progress', progressSchema);
module.exports = Progress;
