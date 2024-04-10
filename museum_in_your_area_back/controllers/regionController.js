const {getRegions} = require('../services/regionService')

const getAllRegions = async (req, res) => {
    try {
      const regions = await getRegions();
      res.status(200).json(regions);
    } catch (error) {
      console.error("Error in getRegions controller:", error);
      res.status(500).send("An error occurred while fetching regions.");
    }
};

module.exports = {getAllRegions}