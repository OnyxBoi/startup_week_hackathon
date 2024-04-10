const {getDepartments} = require('../services/departmentService')

const getAllDepartments = async (req, res) => {
    try {
      const departments = await getDepartments();
      res.status(200).json(departments);
    } catch (error) {
      console.error("Error in getDepartments controller:", error);
      res.status(500).send("An error occurred while fetching departments.");
    }
};

module.exports = {getAllDepartments}