'use strict';

var express = require('express');
var router = express.Router();
const subjectController = require('../../controllers/subject.controllers');

// Subject route for creating a new subject

router.post('/', subjectController.create_subject);
router.get('/', subjectController.get_all_subjects);
module.exports = router;