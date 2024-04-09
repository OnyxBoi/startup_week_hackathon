const { UPDATE } = require('sequelize/lib/query-types');
const {db} = require('./db');

const { DataTypes } = require("sequelize");

const Department = db.define(
    "departments",
    {
        department_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, 
    {
        timestamps: false
    }
)

module.exports={Department}