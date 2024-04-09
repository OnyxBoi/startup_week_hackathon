const {readFile} = require("node:fs/promises");
// const {Museum} = require('../models/museumsModel')
// const {Thematic} = require('../models/thematicDomainModel')
const {Museum, Thematic_Domain} = require('../models/associations')

async function getMuseums(criterias = {}) {
    const where = {};
    if(criterias.official_name){
        where.official_name = criterias.official_name;
    }
    if(criterias.identifier){
        where.identifier = criterias.identifier;
    }
    return await Museum.findAll({where,
        include: [
            {
                through: "museum_thematic_domains",
                model: Thematic_Domain
            }
        ]});
    
}

async function getMuseumByTown(town) {
    try {
        let datas = await readFile("./musees.json", { encoding: "utf-8" });
        let museumsData = JSON.parse(datas);
        let museums = museumsData.filter(museum => museum.ville === town);

        // console.log(musees);
        return museums;
    } catch (error) {
        console.error("Error reading file:", error);
        throw error; 
    }
}

async function getMuseumsByDepartment(department) {
    try {
        let datas = await readFile("./musees.json", { encoding: "utf-8" });
        let museumsData = JSON.parse(datas);
        let museums = museumsData.filter(museum => museum.departement === department);

        // console.log(musees);
        return museums;
    } catch (error) {
        console.error("Error reading file:", error);
        throw error; 
    }
}

async function getMuseumsByTheme(theme) {
    try {
        let datas = await readFile("./musees.json", { encoding: "utf-8" });
        let museumsData = JSON.parse(datas);
        let museums = museumsData.filter(museum => museum.domaine_thematique && museum.domaine_thematique.includes(theme));

        // console.log(musees);
        return museums;
    } catch (error) {
        console.error("Error reading file:", error);
        throw error; 
    }
}

module.exports = {
    getMuseums,
    getMuseumByTown,
    getMuseumsByDepartment,
    getMuseumsByTheme
}

