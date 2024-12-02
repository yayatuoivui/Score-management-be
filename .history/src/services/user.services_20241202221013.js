'use strict';
const db = require('../models');

class userServices {
    // Create a new user
    static create = async ({role, name, email, password}) => {
        try {
            const user = await db.Users.create();
            return user;
        } catch (error) {
            throw new Error("Failed to create user: " + error.message);
        }
    }
}

module.exports = userServices;