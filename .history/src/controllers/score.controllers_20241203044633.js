'use strict';

const scoreServices = require('../services/score.services');

class scoreController {
    static create_score = async (req, res) => {
        try {
            const scoreData = req.body;
            const score = await scoreServices.create(scoreData);
            return res.status(200).json({
                message: "Score created successfully ok",
                code: "200",
                data: score
            });
        } catch (error) {
            return res.status(500).json({
                message: "An error occurred while creating the score",
                code: "500",
                error: error.message
            });
        }
    }   
    static  get_all_user_scores = async (req, res) => {
        try {
            const user_id = req.params.user_id;
            const scores = await scoreServices.getAllUserScores(user_id);
            return res.status(200).json({
                message: "Scores fetched successfully ok",
                code: "200",
                data: scores
            });
        } catch (error) {
            return res.status(500).json({
                message: "An error occurred while fetching the scores",
                code: "500",
                error: error.message
            });
        }
    }
}

module.exports = scoreController;