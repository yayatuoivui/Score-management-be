'use strict';

const classServices = require('../services/class.services');

class classController {

    static create_class = async (req, res) => {
        try {
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
    static get_all_classes = async (req, res) => {
        try {
            const classes = await classServices.getAll();
            return res.status(200).json({
                message: "Classes fetched successfully ok",
                code: "200",
                data: classes
            });
        } catch (error) {
            return res.status(500).json({
                message: "An error occurred while fetching the classes",
                code: "500",
                error: error.message
            });
        }
    }   
}

module.exports = classController;