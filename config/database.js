// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'natan', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
