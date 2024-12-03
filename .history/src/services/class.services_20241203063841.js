'use strict';
const db = require('../models');
const { v4: uuidv4 } = require('uuid');

class classServices {
    static create = async ({name}) => {
        const class_id = uuidv4();
        try {
            const class_ = await db.Classes.create({
                class_id: class_id,
                name: name
            });
            return class_;
        } catch (error) {
            throw new Error("Failed to create class: " + error.message);
        }
    }
    static getAll = async () => {
        try {
            const classes = await db.Classes.findAll();
            return classes;
        } catch (error) {
            throw new Error("Failed to fetch classes: " + error.message);
        }
    }   
}

module.exports = classServices;