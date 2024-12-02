
'use strict';
const db = require('../models');

class userServices {
    // Create a new user
    static create = async ({user_id, role, fullname, email, password}) => {
        try {
            const user = await db.User.create({
                user_id: user_id,
                role: role,
                fullname: fullname,
                email: email,
                password: password
            });
            return user;
        } catch (error) {
            throw new Error("Failed to create user: " + error.message);
        }
    }
}

module.exports = userServices;