const { UPDATE } = require('sequelize/lib/query-types');
const {db} = require('./db');

const { DataTypes } = require("sequelize");

const Coordinate = db.define(
    "coordinates",
    {
        coordinates: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, 
    {
        timestamps: false
    }
)

module.exports={Coordinate}