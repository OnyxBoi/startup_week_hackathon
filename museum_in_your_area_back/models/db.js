const Sequelize = require('sequelize');

const db = new Sequelize("sqlite:museums.sqlite", {
});

module.exports = { db };