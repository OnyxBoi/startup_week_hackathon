const {getAllMuseums, getMuseumsByDepartmentId, getMuseums} = require("../services/museumService");

const getEveryMuseums = async (req, res) => {
  try {
    const museums = await getAllMuseums();
    res.status(200).json(museums);
  } catch (error) {
    console.error("Error in getMuseums controller:", error);
    res.status(500).send("An error occurred while fetching museums.");
  }
};

const getMuseumsByDepartment = async (req, res) => {
  try {
    const departmentId = req.query.departmentId;
    if (!departmentId) {
      return res
        .status(400)
        .send("Department ID is required as a query parameter");
    }

    const museums = await getMuseumsByDepartmentId(departmentId);
    res.status(200).json(museums);
  } catch (error) {
    console.error("Error in getMuseumsByDepartment controller:", error);
    res.status(500).send("An error occurred while fetching museums.");
  }
};

const getFilterMuseums = async (req, res) => {
  try {
    const { departmentId, cityId, regionId, themeId } = req.query;
    const criterias = {};
    if (departmentId) {
      criterias.departmentId = departmentId.split(',').map(id => parseInt(id)); 
    }
    if (cityId) {
      criterias.cityId = cityId.split(',').map(id => parseInt(id));
    }
    if (regionId) {
      criterias.regionId = regionId.split(',').map(id => parseInt(id));
    }
    if (themeId) {
      criterias.themeId = themeId.split(',').map(id => parseInt(id));
    }

    const museums = await getMuseums(criterias);
    res.json(museums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = { getFilterMuseums, getMuseumsByDepartment, getEveryMuseums };
