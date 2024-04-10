const express = require("express");
const router = express.Router();

const mapBoxController = require("../controllers/mapBoxController");

router.post("/", mapBoxController.getMuseumsWithinRadius);

module.exports = router;
