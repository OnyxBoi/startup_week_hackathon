const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "City",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      city_name: {
        type: DataTypes.TEXT,
        unique: true,
      },
    },
    {
      timestamps: false,
    },
  );
};
