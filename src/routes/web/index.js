const express = require('express');

const userRouter = require('./users');

const web_api = express();

web_api.use('/users', userRouter);

module.exports = web_api;