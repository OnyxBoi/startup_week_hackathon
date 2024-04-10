const {
  Museum,
  Coordinate,
  Address,
  Contact,
  Detail,
  Protection,
  Timestamp,
  ThematicDomain,
  City,
  Department,
  Region,
} = require("../models");

const toRad = (value) => (value * Math.PI) / 180;

const haversineDistance = (coords1, coords2) => {
  const [lat1, lon1] = coords1;
  const [lat2, lon2] = coords2;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const getMuseumsWithinRadius = async (lat, lng, radius) => {
  const museums = await Museum.findAll({
    include: [
      { model: Coordinate },
      { model: Address, include: [City, Department, Region] },
      { model: Contact },
      { model: Detail },
      { model: Protection },
      { model: Timestamp },
      {
        model: ThematicDomain,
        through: {
          attributes: [],
        },
      },
    ],
  });

  const filteredMuseums = museums
    .filter((museum) => {
      if (!museum.Coordinate || !museum.Coordinate.coordinates) {
        return false;
      }
      const [museumLat, museumLng] = museum.Coordinate.coordinates
        .split(",")
        .map(Number);
      const distance = haversineDistance([lat, lng], [museumLat, museumLng]);
      return distance <= radius;
    })
    .map((museum) => museum.toJSON());

  return filteredMuseums.length > 0 ? filteredMuseums : {};
};

module.exports = { getMuseumsWithinRadius };
