const { UPDATE } = require('sequelize/lib/query-types');
const {db} = require('./db');

const { DataTypes } = require("sequelize");

const Address = db.define(
    "addresses",
    {
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        postal_code: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, 
    {
        timestamps: false
    }
)

module.exports={Address}