const {
  getAllMuseums,
  getMuseumsByDepartmentId,
} = require("../services/museumService");

const getMuseums = async (req, res) => {
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

module.exports = { getMuseums, getMuseumsByDepartment };
