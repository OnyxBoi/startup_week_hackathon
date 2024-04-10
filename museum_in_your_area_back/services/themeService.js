const { ThematicDomain } = require("../models");


async function getThemes(){
    try {
        return await ThematicDomain.findAll();
      } catch (error) {
        console.error("Error fetching themes:", error);
        throw error;
      }
}

module.exports = {getThemes}