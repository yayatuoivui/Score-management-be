require('dotenv').config()
const express = require('express');
const path = require('path');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');

// Routers
// const indexRouter = require('./routes/auth');
// const admin_api = require('./routes/admin/index');
const web_api = require('./routes/web/index');

const app = express();
app.use(express.json());

// Middleware for parsing URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));


// init mysql db
const { sequelize } = require('./databases/init.mysql')
// app rotes

app.use('/v1/web', web_api);

/* GET home page. */
app.get('/', function(req, res, next) {
  res.json({
    "msg": "Hello World"
  });
});

app.post('/', function(req, res, next) {
  console.log(req.body);
  res.json({
    "msg": "Hello World"
  });
});

// handling errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error'
    })
});

module.exports = app;