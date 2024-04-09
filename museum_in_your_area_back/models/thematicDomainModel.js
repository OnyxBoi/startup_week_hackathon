const { UPDATE } = require('sequelize/lib/query-types');
const {db} = require('./db');
const {museum} = require('./museumsModel')

const { DataTypes } = require("sequelize");

const Thematic_Domain = db.define(
    "thematic_domains",
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



module.exports={Thematic_Domain}