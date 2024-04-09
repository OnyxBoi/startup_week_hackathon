const { UPDATE } = require('sequelize/lib/query-types');
const {db} = require('./db');

const { DataTypes } = require("sequelize");

const Timestamp = db.define(
    "timestamps",
    {
        creation_year: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        update_date: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        
    }, 
    {
        timestamps: false
    }
)

module.exports={Timestamp}