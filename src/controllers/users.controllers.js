'use strict';

const userServices = require('../services/user.services');

class userController {
    // Create a new user
    static create_user = async (req, res) => {
        try {
            const userData = req.body;

            // Call the service to create a user
            const user = await userServices.create(userData);

            return res.status(200).json({
                message: "User created successfully",
                code: "200",
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

module.exports = userController;