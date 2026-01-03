const mongoose = require('mongoose');
const User = require('./models/User');
const dotenv = require('dotenv');

dotenv.config();

const checkUsers = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB. Database Name: ${conn.connection.name}`);

        const users = await User.find({}, 'username email createdAt');
        console.log('Users found:', users.length);
        users.forEach(u => console.log(`- ${u.username} (${u.email}) [${u.createdAt}]`));

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

checkUsers();
