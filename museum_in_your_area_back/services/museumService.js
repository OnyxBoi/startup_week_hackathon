const { Museum, Address, Detail, ThematicDomain, Contact, Protection, Timestamp, Coordinate } = require("../models");
const { Op } = require('sequelize');

const getAllMuseums = async () => {
  try {
    return await Museum.findAll({ limit: 40,
    include: [
      {
        through: "Museum_Thematic_Domain",
        model: ThematicDomain
      },
      {model: Address},
      {model: Detail},
      {model: Contact},
      {model: Protection},
      {model: Timestamp},
      {model: Coordinate}

    ] });
  } catch (error) {
    console.error("Error fetching museums:", error);
    throw error;
  }
};



async function getMuseums(criterias = {}) {
  const associations = [];

  if (criterias.departmentId) {
    criterias.departmentId = criterias.departmentId.split(',').map(id => parseInt(id)); 
    associations.push({
      model: Address,
      where: { department_id: { [Op.in]: criterias.departmentId } }
    });
  }
  if (criterias.cityId) {
    criterias.cityId = criterias.cityId.split(',').map(id => parseInt(id));
    associations.push({
      model: Address,
      where: { city_id: { [Op.in]: criterias.cityId} }
    });
  }
  if (criterias.regionId) {
    criterias.regionId = criterias.regionId.split(',').map(id => parseInt(id));
    associations.push({
      model: Address,
      where: { region_id: {[Op.in]: criterias.regionId} }
    });
  }
  if (criterias.themeId) {
    criterias.themeId = criterias.themeId.split(',').map(id => parseInt(id));
    associations.push({
      through: "Museum_Thematic_Domain",
      model: ThematicDomain,
      where: { id: { [Op.in]: criterias.themeId} }
  });
  }

  associations.push(
    {model: Address},
    {model: Detail},
    {model: Contact},
    {model: Protection},
    {model: Timestamp},
    {model: Coordinate})

  return await Museum.findAll({ 
    include: associations});
}

async function getMuseumId(id){
  const museum = await Museum.findByPk(id);
  return museum
}

async function get3Museums() {
  return await Museum.findAll({
    order: Museum.sequelize.literal('RANDOM()'),
    limit: 3
  });
}


module.exports = { getAllMuseums, getMuseums, getMuseumId, get3Museums };
