'use strict';
const db = require('../models');
const { v4: uuidv4 } = require('uuid');

class userServices {
    static create = async ({role, fullname, email, password, ID_number, date_of_birth, department}) => {
        const user_id = uuidv4();
        try {
            const user = await db.User.create({
                user_id: user_id,
                role: role,
                fullname: fullname,
                email: email,
                password: password,
                ID_number: ID_number,
                date_of_birth: date_of_birth,
                department: department
            });
            return user;
        } catch (error) {
            throw new Error("Failed to create user: " + error.message);
        }
    }
}

module.exports = userServices;