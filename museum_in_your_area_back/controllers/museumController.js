const museumServices = require('../services/museumServices');
var geoip = require("geoip-lite");

async function getMuseums(req, res){
    try{
        const museums = {
            datas: await museumServices.getMuseums(),
        }
        res.send(museums);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
    
}

async function getMuseumsByTown(req, res){
    try{
        const town = req.params.town
        const museums = {
            datas: await museumServices.getMuseumByTown(town),
        }
        res.send(museums);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
    
}

async function getMuseumsByDepartment(req, res){
    try{
        const department = req.params.department
        const museums = {
            datas: await museumServices.getMuseumsByDepartment(department),
        }
        res.send(museums);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
    
}

async function getMuseumsByTheme(req, res){
    try{
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const geo = geoip.lookup(ip);
        console.log(geo);
//curl -X GET http://localhost:3000/api/v2/musees/ville/Villeneuve-sur-Lot -H "x-forwarded-for: 123.456.789.123"
//après le H c'est pour simuler l'envoi depuis une adresse IP
        const themes = req.params.themes;

        const museums = {
            datas: await museumServices.getMuseumsByTheme(themes),
            userLocation: geo 
        };
        res.send(museums);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
    
}

module.exports = {
    getMuseums,
    getMuseumsByTown,
    getMuseumsByDepartment,
    getMuseumsByTheme
}
