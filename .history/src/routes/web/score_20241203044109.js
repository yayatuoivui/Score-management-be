'use strict';

var express = require('express');
var router = express.Router();
const scoreController = require('../../controllers/score.controllers');

// User route for creating a new user

router.post('/', scoreController.create_score);
router.get('/:user_id', scoreController.get_all_user_scores);
module.exports = router;