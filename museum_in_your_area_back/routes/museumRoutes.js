const express = require('express');
const router = express.Router();

const museumController = require('../controllers/museumController')

router.get("/", museumController.getMuseums);
router.get("/town/:town", museumController.getMuseumsByTown);
router.get("/department/:department", museumController.getMuseumsByDepartment);
router.get("/themes/:themes", museumController.getMuseumsByTheme);

module.exports = router;