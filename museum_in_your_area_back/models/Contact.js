const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Contact",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      phone: {
        type: DataTypes.TEXT,
      },
      url: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    },
  );
};
