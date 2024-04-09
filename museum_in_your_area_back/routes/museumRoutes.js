const express = require("express");
const router = express.Router();

const museumController = require("../controllers/museumController");

router.get("/", museumController.getMuseums);
router.get("/department", museumController.getMuseumsByDepartment);

module.exports = router;
