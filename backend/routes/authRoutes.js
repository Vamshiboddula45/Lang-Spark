const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer config
// Multer config
const storage = multer.diskStorage({
    destination(req, file, cb) {
        console.log('Multer Destination called:', uploadDir);
        cb(null, uploadDir);
    },
    filename(req, file, cb) {
        console.log('Multer Filename called. User:', req.user?._id);
        cb(null, `${req.user._id}-${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Images only!');
        }
    },
});

const generateToken = (id) => {
    try {
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET is not defined!');
            throw new Error('JWT_SECRET missing');
        }
        return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    } catch (error) {
        console.error('Token generation failed:', error);
        throw error;
    }
};

// Signup
router.post('/signup', asyncHandler(async (req, res) => {
    const { email, password, username, full_name, phone } = req.body;
    console.log('Signup Request Body:', { email, username, phone }); // Do not log password

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        username: username || email.split('@')[0],
        email,
        password,
        phone
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            token: generateToken(user._id),
            avatar_url: user.avatar ? `http://localhost:5000/${user.avatar}` : ''
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
}));

// Login
router.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            token: generateToken(user._id),
            avatar_url: user.avatar ? `http://localhost:5000/${user.avatar}` : ''
        });
    } else {
        console.log(`Login failed for ${email}: Invalid credentials`);
        res.status(401);
        throw new Error('Invalid email or password');
    }
}));

// Get Profile
router.get('/profile', protect, asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            id: user._id,
            email: user.email,
            phone: user.phone,
            username: user.username,
            avatar_url: user.avatar ? `http://localhost:5000/uploads/${user.avatar}` : ''
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
}));

// Update Profile
router.put('/profile', protect, asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.username = req.body.username || user.username;
        if (req.body.password) {
            user.password = req.body.password;
        }
        if (req.body.phone) {
            user.phone = req.body.phone;
        }
        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            phone: updatedUser.phone,
            token: generateToken(updatedUser._id),
            avatar_url: updatedUser.avatar ? `http://localhost:5000/uploads/${updatedUser.avatar}` : ''
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
}));

// Upload Avatar
router.post('/avatar', protect, upload.single('avatar'), asyncHandler(async (req, res) => {
    console.log('Avatar upload route hit. File:', req.file);
    const user = await User.findById(req.user._id);
    if (user) {
        if (!req.file) {
            res.status(400);
            throw new Error('No file uploaded');
        }
        user.avatar = req.file.filename; // store filename only
        const updatedUser = await user.save();
        res.json({
            avatar_url: `http://localhost:5000/uploads/${updatedUser.avatar}`
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
}));

module.exports = router;
