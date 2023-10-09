const express = require("express");
const router = express.Router();
const breweryController = require("../../../controllers/breweryController");

// routes for breweries
router.get("/api/breweries", breweryController.index);
router.get("/api/breweries", breweryController.create);
router.get("/api/breweries/breweryId", breweryController.show);
router.patch("/api/breweires/breweryId", breweryController.update);
router.delete("/api/breweries/breweryId", breweryController.delete);

module.exports = router;
