const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Demande = require("../models/Demande");
const webpush = require("web-push");
app.use(express.json());
module.exports = {
  addDemande(req, res) {
    keys = Object.keys(req.body);
    if (
      !keys.includes("cin") ||
      !keys.includes("zone") ||
      !keys.includes("tempsRetour") ||
      !keys.includes("where") ||
      !keys.includes("reason") ||
      keys.length !== 5
    ) {
      res.status(422);
      res.setHeader("Content-Type", "application/json");
      res.json({
        err: "invalid data"
      });
    } else {
      Demande.find({ cin: req.body.cin, state: 1 })
        .then(async resp => {
          if (!resp.length) {
            let score = await getScore(req.body);
            if (score == -1) {
              res.json({
                err: "can't get score! try again!"
              });
            } else {
              Demande.create({ ...req.body, score: score })
                .then(doc => {
                  res.status(201);
                  res.json({
                    success: true,
                    status: doc
                  });
                })
                .catch(err => {
                  res.json({ err: err.message });
                });
            }
          } else {
            res.status(409);
            res.setHeader("Content-Type", "application/json");
            res.json({
              err: "there is already a demand"
            });
          }
        })
        .catch(err => {
          res.json({ err: err.message });
        });
    }
  },

  changeState(req, res) {
    if (
      typeof req.body.state == "number" &&
      Object.keys(req.body).length == 2 &&
      Object.keys(req.body).includes("state") &&
      Object.keys(req.body).includes("id")
    ) {
      if (
        req.body.state.toString() === "0" ||
        req.body.state.toString() === "1" ||
        req.body.state.toString() === "2"
      ) {
        Demande.findOneAndUpdate({ _id: req.body.id }, req.body)
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
  },
  checkTime(req, res, next) {
    Demande.find({ state: 1 })
      .then(all => {
        all.forEach(a => {
          const time = a.tempsRetour.split(":");
          const tempsRetour = +time[0] * 60 + +time[1];
          const date = new Date();
          if (date.getDay() == a.date.getDay()) {
            const temps = date.getHours() * 60 + date.getMinutes();
            if (temps > tempsRetour) {
            }
          } else {
            Demande.updateOne(
              {
                _id: a._id
              },
              {
                $set: {
                  state: 0
                }
              }
            ).then(ai => {
              console.log(ai);
            });
          }
        });
        next();
      })
      .catch(err => next(err));
  }
};

async function getScore(demande) {
  var result = -1;
  let dmd;
  dmd = await Demande.find({ state: 1, zone: demande.zone }, (err, res) => {
    if (err) res.json({ err: err.message });
    else {
      result = res.length;
    }
  });
  if (dmd) return result;
}
