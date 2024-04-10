const { Region } = require("../models");


async function getRegions(){
    try {
        return await Region.findAll();
      } catch (error) {
        console.error("Error fetching regions:", error);
        throw error;
      }
}

module.exports = {getRegions}