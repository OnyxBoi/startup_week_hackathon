const express = require("express");
const router = express.Router();

const museumController = require("../controllers/museumController");

router.get("/", museumController.getEveryMuseums);
router.get("/department", museumController.getMuseumsByDepartment);
router.get("/all", museumController.getFilterMuseums);

module.exports = router;
