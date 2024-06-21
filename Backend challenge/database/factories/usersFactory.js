require('dotenv').config();
require('./../../config/db');

const User = require('./../../models/UserSchema');


async function createUsersIfNone() {
    try {
        const userCount = await User.countDocuments();
        console.log('testing');

        if (userCount < 5) {
            const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'William'];
            const lastNames = ['Doe', 'Smith', 'Johnson', 'Williams', 'Brown'];

            const users = [];
            for (let i = 0; i < 5; i++) {
                const firstName = firstNames[i];
                const lastName = lastNames[i];
                const user = new User({
                    email: `user${i + 1}@example.com`,
                    firstname: firstName,
                    lastname: lastName,
                    password: 'password123'
                });
                await user.save();
                users.push(user);
            }
            console.log('Created users: ', users);
        } else {
            console.log('Users already exist in the database.');
        }
    } catch (error) {
        console.error('Error creating or checking users:', error);
    } finally {
    }
}


createUsersIfNone().then(r => {
    console.log('Successful');
    process.exit();
});