const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Department",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      department_name: {
        type: DataTypes.TEXT,
        unique: true,
      },
    },
    {
      timestamps: false,
    },
  );
};
