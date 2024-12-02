'use strict';
const db = require('../models');
const { v4: uuidv4 } = require('uuid');

class userServices {
    static create = async ({role, fullname, email, password}) => {
        const user_id = uuidv4();
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