const {getCities} = require('../services/cityService')

const getAllCities = async (req, res) => {
    try {
      const cities = await getCities();
      res.status(200).json(cities);
    } catch (error) {
      console.error("Error in getCities controller:", error);
      res.status(500).send("An error occurred while fetching cities.");
    }
};

module.exports = {getAllCities}