const { UPDATE } = require('sequelize/lib/query-types');
const {db} = require('./db');

const { DataTypes } = require("sequelize");

const Detail = db.define(
    "Detail",
    {
        highlight: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        themes: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        artist: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        key_figure: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        interest: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, 
    {
        timestamps: false
    }
)

module.exports={Detail}