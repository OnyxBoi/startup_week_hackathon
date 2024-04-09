const Sequelize = require('sequelize');

const db = new Sequelize("sqlite:musees.sqlite3", {
});

module.exports = { db };