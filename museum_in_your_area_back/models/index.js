const sequelize = require("../dbConfig");

const City = require("./City")(sequelize);
const Contact = require("./Contact")(sequelize);
const Coordinate = require("./Coordinate")(sequelize);
const Department = require("./Department")(sequelize);
const Detail = require("./Detail")(sequelize);
const Museum = require("./Museum")(sequelize);
const Protection = require("./Protection")(sequelize);
const Region = require("./Region")(sequelize);
const Address = require("./Address")(sequelize);
const ThematicDomain = require("./ThematicDomain")(sequelize);
const MuseumThematicDomain = require("./MuseumThematicDomain")(sequelize);
const Timestamp = require("./Timestamp")(sequelize);

// Relations
// Address associations
Address.belongsTo(City, { foreignKey: "city_id" });
Address.belongsTo(Department, { foreignKey: "department_id" });
Address.belongsTo(Region, { foreignKey: "region_id" });
City.hasMany(Address, { foreignKey: "city_id" });
Department.hasMany(Address, { foreignKey: "department_id" });
Region.hasMany(Address, { foreignKey: "region_id" });

// Museum associations
Museum.belongsTo(Address, { foreignKey: "address_id" });
Museum.belongsTo(Contact, { foreignKey: "contact_id" });
Museum.belongsTo(Detail, { foreignKey: "details_id" });
Museum.belongsTo(Protection, { foreignKey: "protections_id" });
Museum.belongsTo(Timestamp, { foreignKey: "timestamp_id" });
Museum.belongsTo(Coordinate, { foreignKey: "coordinates_id" });

// Thematic domain associations in the context of Museums
Museum.belongsToMany(ThematicDomain, {
  through: MuseumThematicDomain,
  foreignKey: "museum_id",
  otherKey: "thematic_domain_id",
});
ThematicDomain.belongsToMany(Museum, {
  through: MuseumThematicDomain,
  foreignKey: "thematic_domain_id",
  otherKey: "museum_id",
});

module.exports = {
  City,
  Contact,
  Coordinate,
  Department,
  Detail,
  Museum,
  Protection,
  Region,
  Address,
  ThematicDomain,
  MuseumThematicDomain,
  Timestamp,
};
