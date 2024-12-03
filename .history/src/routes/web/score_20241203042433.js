'use strict';

var express = require('express');
var router = express.Router();
const scoreController = require('../../controllers/score.controllers');

// User route for creating a new user

router.post('/', scoreController.create_score);
module.exports = router;