const express = require("express");
const router = express.Router();

const museumController = require("../controllers/museumController");

router.get("/filter", museumController.getFilterMuseums);
router.get("/random", museumController.getRandomMuseum);

module.exports = router;
