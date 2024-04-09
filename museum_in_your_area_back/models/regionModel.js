const { UPDATE } = require('sequelize/lib/query-types');
const {db} = require('./db');

const { DataTypes } = require("sequelize");

const Region = db.define(
    "Region",
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, 
    {
        timestamps: false
    }
)

module.exports={Region}