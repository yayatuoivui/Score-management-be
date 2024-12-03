
'use strict';
const db = require('../models');
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

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