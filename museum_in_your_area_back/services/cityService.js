const { City } = require("../models");


async function getCities() {
    try {
        const cities = await City.findAll();
        
        // Modifier la clé "cityname" en "name" et supprimer la clé "cityname" pour chaque objet de la liste des villes
        const modifiedCities = cities.map(city => {
            const { city_name, ...rest } = city.toJSON(); // Utiliser la syntaxe de décomposition pour extraire "city_name" et le reste des propriétés
            return {
                ...rest, // Copier toutes les autres propriétés de la ville
                name: city_name, // Utiliser "city_name" comme "name"
            };
        });

        return modifiedCities;
    } catch (error) {
        console.error("Error fetching cities:", error);
        throw error;
    }
}



module.exports = {getCities}