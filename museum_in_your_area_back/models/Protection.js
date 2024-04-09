const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Protection",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      space_protection: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    },
  );
};
