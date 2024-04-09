const { where } = require("sequelize");
const { Museum, Address, Detail, MuseumThematicDomain, ThematicDomain } = require("../models");

const getAllMuseums = async () => {
  try {
    return await Museum.findAll({ limit: 40,
    include: [
      {
        through: "Museum_Thematic_Domain",
        model: ThematicDomain
      }
      

    ] });
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
const { Op } = require('sequelize');

async function getMuseums(criterias = {}) {
  const associations = [];

  if (criterias.departmentId && criterias.departmentId.length > 0) {
    associations.push({
      model: Address,
      where: { department_id: { [Op.in]: criterias.departmentId } }
    });
  }

  if (criterias.cityId) {
    associations.push({
      model: Address,
      where: { city_id: { [Op.in]: criterias.cityId} }
    });
  }

  if (criterias.regionId) {
    associations.push({
      model: Address,
      where: { region_id: {[Op.in]: criterias.regionId} }
    });
  }

  if (criterias.themeId) {
    associations.push({
        through: "Museum_Thematic_Domain",
        model: ThematicDomain,
        where: { id: { [Op.in]: criterias.themeId} }
    });
  }
  return await Museum.findAll({ include: associations });
}


module.exports = { getAllMuseums, getMuseumsByDepartmentId, getMuseums };
