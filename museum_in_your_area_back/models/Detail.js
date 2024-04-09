const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Detail",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      highlight: {
        type: DataTypes.TEXT,
      },
      themes: {
        type: DataTypes.TEXT,
      },
      artist: {
        type: DataTypes.TEXT,
      },
      key_figure: {
        type: DataTypes.TEXT,
      },
      interest: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    },
  );
};
