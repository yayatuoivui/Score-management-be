
'use strict';
const db = require('../models');
const { v4: uuidv4 } = require('uuid');

class userServices {
    // Create a new user
    static create = async ({role, fullname, email, password}) => {
        const user_id = uuidv4();
        try {
            const user = await db.User.create({
                user_id: uuidv4(),
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