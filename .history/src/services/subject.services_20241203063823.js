'use strict';
const db = require('../models');
const { v4: uuidv4 } = require('uuid');

class subjectServices {
    static create = async ({name}) => {
        const subject_id = uuidv4();
        try {
            const subject = await db.Subjects.create({
                subject_id: subject_id,
                name: name
            });
            return subject;
        } catch (error) {
            throw new Error("Failed to create subject: " + error.message);
        }
    }

    static getAll = async () => {
        try {
            const subjects = await db.Subjects.findAll();
            return subjects;
        } catch (error) {
            throw new Error("Failed to fetch subjects: " + error.message);
        }
    }
}

module.exports = subjectServices;