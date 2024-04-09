const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Museum_Thematic_Domain",
    {
      museum_id: {
        type: DataTypes.INTEGER,
        references: "museums",
        referencesKey: "id",
      },
      thematic_domain_id: {
        type: DataTypes.INTEGER,
        references: "thematic_domains",
        referencesKey: "id",
      },
    },
    {
      timestamps: false,
      primaryKey: ["museum_id", "thematic_domain_id"],
    },
  );
};
