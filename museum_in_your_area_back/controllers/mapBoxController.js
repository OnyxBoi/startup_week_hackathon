const mapBoxService = require("../services/mapBoxService");

const getMuseumsWithinRadius = async (req, res) => {
  try {
    const { latitude, longitude, radius } = req.body;
    if (radius < 1 || radius > 300) {
      return res
        .status(400)
        .json({ error: "Radius must be between 1 and 300 km." });
    }

    const museums = await mapBoxService.getMuseumsWithinRadius(
      latitude,
      longitude,
      radius,
    );
    res.json({ data: museums });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getMuseumsWithinRadius };
