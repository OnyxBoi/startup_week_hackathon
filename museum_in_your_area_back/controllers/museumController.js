const {
  getMuseums,
  getMuseumId,
  get3Museums,
} = require("../services/museumService");

const getFilterMuseums = async (req, res) => {
  try {
    const {
      pageId: pageId1,
      itemsPerPage: itemsPerPage1,
      departmentId,
      cityId,
      regionId,
      themeId,
    } = req.query;
    const pageId = parseInt(pageId1) || 1;
    const itemsPerPage = parseInt(itemsPerPage1) || 15;

    const paginationData = await getMuseums(
      { departmentId, cityId, regionId, themeId },
      pageId,
      itemsPerPage,
    );

    const baseUri = `${req.protocol}://${req.get("host")}${req.baseUrl}${req.path}`;
    let queryParams = `itemsPerPage=${itemsPerPage}`;
    queryParams += departmentId ? `&departmentId=${departmentId}` : "";
    queryParams += cityId ? `&cityId=${cityId}` : "";
    queryParams += regionId ? `&regionId=${regionId}` : "";
    queryParams += themeId ? `&themeId=${themeId}` : "";

    const previousURL =
      pageId > 1 ? `${baseUri}?pageId=${pageId - 1}&${queryParams}` : null;
    const nextURL = paginationData.hasMore
      ? `${baseUri}?pageId=${pageId + 1}&${queryParams}`
      : null;

    res.json({
      data: paginationData.museums,
      count: paginationData.count,
      previousURL,
      nextURL,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

async function getMuseumById(req, res) {
  try {
    const id = req.params.id;
    const museum = await getMuseumId(id);
    if (museum) {
      res.json({ data: museum });
    } else {
      res.json({ error: `Museum not found (id: ${id})` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getRandomMuseum(req, res) {
  try {
    const museums = await get3Museums();
    res.json({ data: museums });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getFilterMuseums, getMuseumById, getRandomMuseum };
