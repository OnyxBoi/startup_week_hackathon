const { Museum, Coordinate } = require("../models");

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
    include: [{ model: Coordinate }],
  });

  return museums
    .filter((museum) => {
      if (!museum.Coordinate || !museum.Coordinate.coordinates) {
        console.log(`Skipping museum without coordinates: ${museum.id}`);
        return false;
      }
      const [museumLat, museumLng] = museum.Coordinate.coordinates
        .split(",")
        .map(Number);
      const distance = haversineDistance([lat, lng], [museumLat, museumLng]);
      console.log(
        `Museum ID: ${museum.id}, Distance: ${distance}, Within Radius: ${distance <= radius}`,
      );
      return distance <= radius;
    })
    .map((museum) => museum.toJSON());
};

module.exports = { getMuseumsWithinRadius };
