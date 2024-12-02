
'use strict';
const db = require('../models');

class userServices {
    // Create a new user
    static create = async ({role, fullname, email, password}) => {
        try {
            const user = await db.User.create({
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