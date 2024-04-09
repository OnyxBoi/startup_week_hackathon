const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Address",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      address: {
        type: DataTypes.TEXT,
      },
      postal_code: {
        type: DataTypes.TEXT,
      },
      region_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "regions",
          key: "id",
        },
      },
      city_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "cities",
          key: "id",
        },
      },
      department_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "departments",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    },
  );
};
