const express = require("express");
const router = express.Router();
const AreaController = require('../../controllers/areas')
const mongoose = require('mongoose')


//add "area" to database
router.post("/add", (req, res) => {
  AreaController.addArea(req, res);
});

//get number of people in each zone
router.get("/number/:area", (req,res) => {
    AreaController.getNumber(req,res)
})
module.exports = router;
