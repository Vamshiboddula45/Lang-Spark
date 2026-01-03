const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Progress = require('./models/Progress');

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for Seeding...');

        // Check if data exists
        const userCount = await User.countDocuments();
        if (userCount > 0) {
            console.log('Database already has data!');
            process.exit();
        }

        // Create a test user
        const user = await User.create({
            username: 'TestUser',
            email: 'test@example.com',
            password: 'password123',
            avatar: ''
        });

        console.log(`Created User: ${user.username}`);

        // Create initial progress
        await Progress.create({
            user: user._id,
            language: 'es',
            xp: 0,
            streak: 0
        });

        console.log('Database seeded successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

seedData();
