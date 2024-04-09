const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Timestamp",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      creation_year: {
        type: DataTypes.TEXT,
      },
      update_date: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    },
  );
};
