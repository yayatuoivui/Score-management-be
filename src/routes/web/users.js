'use strict';

var express = require('express');
var router = express.Router();
const userController = require('../../controllers/users.controllers');

// User route for creating a new user

router.post('/users', userController.create_user);

module.exports = router;