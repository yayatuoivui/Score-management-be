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

    static get_all_user_scores = async (user_id) => {
        try {
            const scores = await db.Score.findAll({ where: { user_id: user_id } });
            return scores;
        } catch (error) {
            throw new Error("Failed to fetch scores: " + error.message);
        }
    }
}

module.exports = scoreServices;