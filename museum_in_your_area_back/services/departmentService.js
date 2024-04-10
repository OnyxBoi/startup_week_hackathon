const { Department } = require("../models");


async function getDepartments(){
    try {
        const departments = await Department.findAll();
        
        // Modifier la clé "cityname" en "name" et supprimer la clé "cityname" pour chaque objet de la liste des villes
        const modifiedDepartments = departments.map(department => {
            const { department_name, ...rest } = department.toJSON(); // Utiliser la syntaxe de décomposition pour extraire "city_name" et le reste des propriétés
            return {
                ...rest, // Copier toutes les autres propriétés de la ville
                name: department_name, // Utiliser "city_name" comme "name"
            };
        });

        return modifiedDepartments;
      } catch (error) {
        console.error("Error fetching departments:", error);
        throw error;
      }
}

module.exports = {getDepartments}