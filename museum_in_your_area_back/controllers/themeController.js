const {getThemes} = require('../services/themeService')

const getAllThemes = async (req, res) => {
    try {
      const themes = await getThemes();
      res.status(200).json(themes);
    } catch (error) {
      console.error("Error in getThemes controller:", error);
      res.status(500).send("An error occurred while fetching themes.");
    }
};

module.exports = {getAllThemes}