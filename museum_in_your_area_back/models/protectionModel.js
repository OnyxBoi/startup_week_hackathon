const { UPDATE } = require('sequelize/lib/query-types');
const {db} = require('./db');

const { DataTypes } = require("sequelize");

const Protection = db.define(
    "protections",
    {
        space_protection: {
            type: DataTypes.TEXT,
            allowNull: false
        },
       
        
    }, 
    {
        timestamps: false
    }
)

module.exports={Protection}