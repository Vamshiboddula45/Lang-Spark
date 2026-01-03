const mongoose = require('mongoose');
const User = require('./models/User');
const dotenv = require('dotenv');

dotenv.config();

const emailToCheck = 'balu@gmail.com';

const checkUser = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to DB: ${conn.connection.name}`);

        const user = await User.findOne({ email: emailToCheck });
        if (user) {
            console.log('User FOUND:', user);
        } else {
            console.log('User NOT FOUND:', emailToCheck);
            // List all just in case
            const allUsers = await User.find({}, 'email');
            console.log('All users in DB:', allUsers.map(u => u.email));
        }

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

checkUser();
