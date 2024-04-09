const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Coordinate",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      coordinates: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    },
  );
};
