const express = require("express");
const router = express.Router();

const museumController = require("../controllers/museumController");

router.get("/", museumController.getEveryMuseums);
router.get("/department", museumController.getMuseumsByDepartment);
router.get("/filter", museumController.getFilterMuseums);
router.get("/:id", museumController.getMuseumById);

module.exports = router;
