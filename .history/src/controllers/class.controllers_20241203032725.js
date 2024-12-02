'use strict';

const classServices = require('../services/class.services');

class classController {
    // Create a new user
    static create_class = async (req, res) => {
        try {
            console.log("Incoming request:", req.body);
            const classData = req.body;
            const class_ = await classServices.create(classData);
            return res.status(200).json({
                message: "Class created successfully ok",
                code: "200",
                data: class_
            });
        } catch (error) {
            return res.status(500).json({
                message: "An error occurred while creating the class",
                code: "500",
                error: error.message
            });
        }
    }
}

module.exports = classController;