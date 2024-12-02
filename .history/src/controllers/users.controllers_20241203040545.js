'use strict';

const userServices = require('../services/user.services');

class userController {
    // Create a new user
    static create_user = async (req, res) => {
        try {
            console.log("Incoming request:", req.body);
            const userData = req.body;
            const user = await userServices.create(userData);
            return res.status(200).json({
                message: "User created successfully ok",
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

    static search_by_ID_number = async (req, res) => {
        try {
            const ID_number = req.body.ID_number;
            const user = await userServices.search_by_ID_number({ID_number});
            return res.status(200).json({
                message: "User found successfully ok",
                code: "200",
                data: user
            });
        } catch (error) {
            return res.status(500).json({
                message: "An error occurred while searching the user",
                code: "500",
                error: error.message
            });
        }
    }
}

module.exports = userController;