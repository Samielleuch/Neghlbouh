const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Demande = require("../models/Demande");

app.use(express.json());
module.exports = {
  addDemande(req, res) {
    keys = Object.keys(req.body);
    console.log(keys);
    if (
      !keys.includes("cin") ||
      !keys.includes("firstName") ||
      !keys.includes("lastName") ||
      !keys.includes("firstName") ||
      !keys.includes("reason") ||
      keys.length !== 4
    ) {
      res.status(422);
      res.send("invalid data");
    }
    Demande.create(req.body, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data._id);
      }
    });
  }
};
