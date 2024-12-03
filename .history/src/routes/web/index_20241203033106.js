const express = require('express');

const userRouter = require('./users');
const classRouter = require('./class');

const web_api = express();

web_api.use('/users', userRouter);
web_api.use('/class', classRouter);
module.exports = web_api;