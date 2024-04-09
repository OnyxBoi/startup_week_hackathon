const { UPDATE } = require('sequelize/lib/query-types');
const {db} = require('./db');

const { DataTypes } = require("sequelize");

const Contact = db.define(
    "contacts",
    {
        phone: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false
        },
       
        
    }, 
    {
        timestamps: false
    }
)

module.exports={Contact}