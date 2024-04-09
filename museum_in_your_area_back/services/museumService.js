const { Museum, Address } = require("../models");

const getAllMuseums = async () => {
  try {
    return await Museum.findAll({ limit: 40 });
  } catch (error) {
    console.error("Error fetching museums:", error);
    throw error;
  }
};

const getMuseumsByDepartmentId = async (departmentId) => {
  try {
    return await Museum.findAll({
      include: [
        {
          model: Address,
          where: { department_id: departmentId },
        },
      ],
    });
  } catch (error) {
    console.error("Error fetching museums by department ID:", error);
    throw error;
  }
};

module.exports = { getAllMuseums, getMuseumsByDepartmentId };
