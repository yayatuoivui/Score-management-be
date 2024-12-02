const express = require('express');

const userRouter = require('./users');
const classRouter = require('./class');
const subjectRouter = require('./subject');
const web_api = express();

web_api.use('/users', userRouter);
web_api.use('/class', classRouter);
web_api.use('/subject', subjectRouter);
web_api.use('/score', scoreRouter);
module.exports = web_api;