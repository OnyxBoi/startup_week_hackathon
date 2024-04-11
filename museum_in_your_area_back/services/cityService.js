const { City } = require("../models");


async function getCities() {
    try {
        const cities = await City.findAll();
        
        const modifiedCities = cities.map(city => {
            const { city_name, ...rest } = city.toJSON(); 
            return {
                ...rest, 
                name: city_name, 
            };
        });

        return modifiedCities;
    } catch (error) {
        console.error("Error fetching cities:", error);
        throw error;
    }
}



module.exports = {getCities}