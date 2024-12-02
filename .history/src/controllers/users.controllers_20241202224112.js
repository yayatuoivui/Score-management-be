'use strict';

const UserServices = require('../services/user.services');

class UserController {
    // Create a new user
    static create_user = async (req, res) => {
        try {
            const userData = req.body;

            // Ensure required fields are present
            if (!userData.role || !userData.name || !userData.email || !userData.password) {
                return res.status(400).json({
                    message: "Missing required fields",
                    code: "400"
                });
            }

            const user = await UserServices.create(userData);
            return res.status(201).json({
                message: "User created successfully",
                code: "201",
                data: user
            });
        } catch (error) {
            return res.status(500).json({
                message: "An error occurred while creating the user",
                code: "500",
                error: error.message
            });
        }
    }
}

module.exports = UserController;
