const {db} = require('./db');
const {DataTypes} = require("sequelize");
const {Thematic_Domain} = require('./thematicDomainModel')

const Museum = db.define("museums", {
    identifier: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    official_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    history: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    timestamps: false
});

Museum.associate = (models) => {
    Museum.belongsTo(models.Thematic_Domain, {
        as: "museum_thematic_domains",
        foreignKey: 'id'
    })
}

module.exports = {Museum};
