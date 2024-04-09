const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sqlite:museums.sqlite", {
  logging: false,
});

module.exports = sequelize;
