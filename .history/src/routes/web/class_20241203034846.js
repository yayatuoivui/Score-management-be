'use strict';

var express = require('express');
var router = express.Router();
const classController = require('../../controllers/class.controllers');

// User route for creating a new user

router.post('/', classController.create_class);
router.get('/', classController.get_all_classes);
module.exports = router;