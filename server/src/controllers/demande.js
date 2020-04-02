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
      !keys.includes("when") ||
      !keys.includes("duration") ||
      !keys.includes("where") ||
      !keys.includes("reason") ||
      keys.length !== 5
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
        res.send("invalid input: state' type must be a number");
      }
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
