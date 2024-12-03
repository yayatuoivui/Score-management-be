'use strict';
const db = require('../models');
const { v4: uuidv4 } = require('uuid');

class scoreServices {
    static create = async ({user_id, subject_id, process, midterm, final, date}) => {
        try {
            const score = await db.Score.create({
                user_id: user_id,
                subject_id: subject_id,
                process: process,
                midterm: midterm,
                final: final,
                date: date
            });
            return score;
        } catch (error) {
            throw new Error("Failed to create score: " + error.message);
        }
    }   
}

module.exports = scoreServices;