const express = require("express");
const router = express.Router();
const AreaController = require('../../controllers/areas')
const mongoose = require('mongoose')
const Area = require('../../models/Areas')

router.get("/number/:zone", (req, res) => {
    AreaController.getNumberByArea(req, res);
  });

router.get("/add" , (req,res)=> {
    AreaController.addArea(req,res)
})