'use strict';

const subjectServices = require('../services/subject.services');

class subjectController {
    // Create a new subject
    static create_subject = async (req, res) => {
        try {
            console.log("Incoming request:", req.body);
            const subjectData = req.body;
            const subject = await subjectServices.create(subjectData);
            return res.status(200).json({
                message: "Subject created successfully ok",
                code: "200",
                data: subject
            });
        } catch (error) {
            return res.status(500).json({
                message: "An error occurred while creating the subject",
                code: "500",
                error: error.message
            });
        }
    }

    static get_all_subjects = async (req, res) => {
        try {
            const subjects = await subjectServices.getAll();
            return res.status(200).json({
                message: "Subjects fetched successfully ok",
                code: "200",
                data: subjects
            });
        } catch (error) {
            return res.status(500).json({
                message: "An error occurred while fetching the subjects",
                code: "500",
                error: error.message
            });
        }
    }
}

module.exports = subjectController;