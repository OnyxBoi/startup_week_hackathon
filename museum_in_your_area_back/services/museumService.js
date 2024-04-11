const {
  Museum,
  Address,
  Detail,
  ThematicDomain,
  Contact,
  Protection,
  Timestamp,
  Coordinate,
  Region,
  Department,
  City,
} = require("../models");
const { Op } = require("sequelize");

async function getMuseums(criterias = {}, pageId, itemsPerPage) {
  const offset = (pageId - 1) * itemsPerPage;
  const associations = buildAssociations(criterias);

  const { count, rows } = await Museum.findAndCountAll({
    include: associations,
    limit: itemsPerPage,
    offset,
  });

  return {
    museums: rows,
    count: count,
    hasMore: count > offset + rows.length,
  };
}

function buildAssociations(criterias) {
  const associations = [];

  if (criterias.departmentId) {
    const departmentIds = criterias.departmentId
      .split(",")
      .map((id) => parseInt(id));
    associations.push({
      model: Address,
      where: { department_id: { [Op.in]: departmentIds } },
      include: [{ model: Region }, { model: City }, { model: Department }],
    });
  }

  if (criterias.cityId) {
    const cityIds = criterias.cityId.split(",").map((id) => parseInt(id));
    associations.push({
      model: Address,
      where: { city_id: { [Op.in]: cityIds } },
      include: [City, Department, Region]
    });
  }

  if (criterias.regionId) {
    const regionIds = criterias.regionId.split(",").map((id) => parseInt(id));
    associations.push({
      model: Address,
      where: { region_id: { [Op.in]: regionIds } },
    });
  }

  if (criterias.themeId) {
    const themeIds = criterias.themeId.split(",").map((id) => parseInt(id));
    associations.push({
      model: ThematicDomain,
      through: { attributes: [] },
      where: { id: { [Op.in]: themeIds } },
      
    });
  }

  associations.push(
    { model: Detail },
    { model: Contact },
    { model: Protection },
    { model: Timestamp },
    { model: Coordinate },
    {
      model: ThematicDomain,
      through: { attributes: [] }
      
    },
    {model: Address, include: [City, Department, Region]}
  );

  return associations;
}

async function getMuseumId(id) {
  return await Museum.findByPk(id);
}

async function get3Museums() {
  return await Museum.findAll({
    order: Museum.sequelize.literal("RANDOM()"),
    limit: 3,
    include:[
      { model: Detail },
      { model: Contact },
      { model: Protection },
      { model: Timestamp },
      { model: Coordinate },
      {
        model: ThematicDomain,
        through: { attributes: [] }
        
      },
      {model: Address, include: [City, Department, Region]}
    ]
  });
}

module.exports = { getMuseums, getMuseumId, get3Museums };
