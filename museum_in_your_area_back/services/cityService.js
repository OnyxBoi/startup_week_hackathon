const { City } = require("../models");


async function getCities(){
    try {
        return await City.findAll();
      } catch (error) {
        console.error("Error fetching cities:", error);
        throw error;
      }
}

module.exports = {getCities}