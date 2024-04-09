// Importation des modèles
const {Address} = require('./addressModel');
const {City} = require('./cityModel');
const {Contact} = require('./contactModel');
const {Coordinate} = require('./coordinateModel');
const {Department} = require('./departmentModel');
const {Detail} = require('./detailModel');
const {Museum} = require('./museumsModel'); // Assurez-vous que c'est le bon fichier pour Museum
const {Region} = require('./regionModel');
const {Protection} = require('./protectionModel');
const {Thematic_Domain} = require('./thematicDomainModel');
const {Timestamp} = require('./timestampsModel');

// Associations pour Museum
Museum.belongsTo(Timestamp, {
    as: "timestamp",
    foreignKey: "id",
});

Museum.belongsTo(Protection, {
    as: "protection",
    foreignKey: "id",
});

Museum.belongsTo(Contact, {
    as: "contact",
    foreignKey: "id",
});

Museum.belongsTo(Address, {
    as: "address",
    foreignKey: "id",
});

Museum.belongsTo(Coordinate, {
    as: "coordinate",
    foreignKey: "id",
});

Museum.belongsTo(Detail, {
    as: "detail",
    foreignKey: "id",
});

// Associations pour Address
Address.belongsTo(Region, {
    as: "region",
    foreignKey: "id",
});

Address.belongsTo(Department, {
    as: "department",
    foreignKey: "id",
});

Address.belongsTo(City, {
    as: "city",
    foreignKey: "id",
});

// Relation Many-to-Many entre Museum et ThematicDomain
Museum.belongsToMany(Thematic_Domain, { through: "museum_thematic_domains" });
Thematic_Domain.belongsToMany(Museum, { through: "museum_thematic_domains" });

module.exports = { Museum, Address, City, Contact, Coordinate, Department, Detail, Region, Protection, Thematic_Domain, Timestamp };
