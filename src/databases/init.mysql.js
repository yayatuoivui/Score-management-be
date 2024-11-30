const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');
const {development : {host, username, password, database, port, dialect}} = require("../configs/config.mysql")


const initialize = async () => {
    // Create database if it doesn't exist
    const connection = await mysql.createConnection({
      host: host,
      user: username,
      password: password,
      port: port,
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    await connection.end();
};
  
// Call initialize to create the database if it doesn't exist
initialize()
.then(() => {
    // After initializing, set up Sequelize
    const sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect,
    port: port,
    });

    sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully ok.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    module.exports = {
    sequelize
    };
})
.catch(err => {
    console.error('Error initializing database:', err);
});