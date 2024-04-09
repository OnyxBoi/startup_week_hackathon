const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Museum",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      identifier: {
        type: DataTypes.TEXT,
      },
      official_name: {
        type: DataTypes.TEXT,
      },
      history: {
        type: DataTypes.TEXT,
      },
      address_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "addresses",
          key: "id",
        },
      },
      contact_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "contacts",
          key: "id",
        },
      },
      details_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "details",
          key: "id",
        },
      },
      protections_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "protections",
          key: "id",
        },
      },
      timestamp_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "timestamps",
          key: "id",
        },
      },
      coordinates_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "coordinates",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    },
  );
};
