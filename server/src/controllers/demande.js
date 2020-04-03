const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Demande = require("../models/Demande");
const webpush = require("web-push");
app.use(express.json());
module.exports = {


  addDemande(req, res) {
    keys = Object.keys(req.body);
    console.log(keys);
    if (
      !keys.includes("cin") ||
      !keys.includes("dateSortie") ||
      !keys.includes("tempsRetour") ||
      !keys.includes("where") ||
      !keys.includes("reason") ||
      !keys.includes('tempsSortie') ||
      keys.length !== 6
    ) {
      res.status(422);
      res.send("invalid data");

    }
    Demande.find({ cin: req.body.cin, state: 0 || 1 }).then(resp => {
      if (!resp.length) {
        Demande.create(req.body).then(() => {
          res.status(422)
          res.send("created succesfully");
        });
      } else {
        res.send("there is already a demand");
      }
    });
  },

  changeState(req, res) {
    if (
      typeof req.body.state == "number" &&
      Object.keys(req.body).length == 1 &&
      Object.keys(req.body).includes("state")
    ) {
      if (
        req.body.state.toString() === "1" ||
        req.body.state.toString() === "2"
      ) {
        Demande.findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(() => {
            res.send("succefully updated");
          })
          .catch(error => {
            res.send(error);
          });
      } else {
        res.status(500);
        res.send("invalid input");
      }
    } else {
      res.status(500);
      res.send("invalid input: state' type must be a number");
    }
  }
};
