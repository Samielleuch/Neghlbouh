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
      res.setHeader('Content-Type', 'application/json');
      res.json({
        err: "invalid data"
      });

    } else {
      Demande.find({ cin: req.body.cin, state: { $in: [0, 1] } }).then(resp => {
        console.log(resp)
        if (!resp.length) {
          Demande.create(req.body).then(() => {
            res.status(201)
            res.json({
              success:true,
              status : "created succesfully"
            });
          }).catch((err) => {
            res.json({ err: err.message })
          });
        } else {
          res.status(409)
          res.setHeader('Content-Type', 'application/json');
          res.json({
            err: "there is already a demand"
          });
        }
      }).catch((err) => {
        res.json({ err: err.message })
      });
    }
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
            res.json({
              success: true,
              status: "succefully updated"
            });
          })
          .catch(error => {
            res.json({
              err: error.message
            });
          });
      } else {
        res.status(422);
        res.json({
          err: "invalid data"
        });
      }
    } else {
      res.status(422);
      res.json({
        err: "invalid input: state' type must be a number"
      });
    }
  }
};
