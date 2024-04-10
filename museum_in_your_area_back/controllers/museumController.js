const {getMuseums, getMuseumId, get3Museums} = require("../services/museumService");

const getFilterMuseums = async (req, res) => {
  try {
    const { departmentId, cityId, regionId, themeId } = req.query;
    const museums = await getMuseums({ departmentId, cityId, regionId, themeId } );
    res.json(museums);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

async function getMuseumById(req, res){
  try{
    const id = req.params.id;
    const museum = await getMuseumId(id);
    if(museum){
      res.json(museum)
    } else{
      res.json({ "error": `Museum not found (id: ${id})` })
    }
  } catch(err){
    res.status(500).json({ message: err.message });
  }
  
}


async function getRandomMuseum(req, res){
  try{
    const museums = await get3Museums();
    res.json(museums)
  } catch(err){
    res.status(500).json({ message: err.message });
  }
  
}

module.exports = { getFilterMuseums, getMuseumById, getRandomMuseum };
