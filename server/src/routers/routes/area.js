const express = require("express");
const router = express.Router();
const AreaController = require("../../controllers/areas");
const DemandeController = require("../../controllers/demande");
const mongoose = require("mongoose");

//add "area" to database
router.post("/add", (req, res) => {
  AreaController.addArea(req, res);
});
router.all("/number", (req, res, next) => {
  DemandeController.checkTime(req, res, next);
  console.log("checked");
});
//get number of people in each zone
router.get("/number", (req, res) => {
  AreaController.getAreasWithCount(req, res);
});
module.exports = router;
