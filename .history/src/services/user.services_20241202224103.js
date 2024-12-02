'use strict';
const db = require('../models');
const bcrypt = require('bcrypt'); // Ensure bcrypt is installed

class UserServices {
    // Create a new user
    static create = async ({ role, name, email, password }) => {
        try {
            // Basic input validation
            if (!role || !name || !email || !password) {
                throw new Error("All fields (role, name, email, password) are required.");
            }

            // Hash the password before saving it
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await db.Users.create({
                role,
                name,
                email,
                password: hashedPassword
            });
            return user;
        } catch (error) {
            throw new Error("Failed to create user: " + error.message);
        }
    }
}

module.exports = UserServices;
