'use strict';

var express = require('express');
var router = express.Router();
const userController = require('../../controllers/users.controllers');

// User route for creating a new user

router.post('/', userController.create_user);
router.get('/search', userController.search_by_ID_number);
module.exports = router;