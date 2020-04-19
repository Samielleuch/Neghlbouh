const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Area = require("../models/Areas");
const Demande = require("../models/Demande");
const webpush = require("web-push");
const validate = require("./Validate");
app.use(express.json());
module.exports = {
  addArea(req, res) {
    keys = Object.keys(req.body);
    if (!keys.includes("name") || keys.length !== 1) {
      res.status(422);
      res.setHeader("Content-Type", "application/json");
      res.json({
        err: "invalid data"
      });
    }
    Area.create({ name: req.body.name }, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data._id);
      }
    });
  },

  getAreasWithCount(req, res) {
    Area.updateMany(
      {},
      {
        $set: {
          countPeople: 0 // yraja3 lwileyeet lkol l 0 3beed
        }
      }
    )
      .then(() => {
        today = new Date(); //
        today.setHours(0, 0, 0, 0);
        return Demande.find({ state: 1 }); // search for accepted demands
      })
      .then(async demandes => {
        let a = await Array();
        for (let i = 0; i < demandes.length; i++) {
          let demande = demandes[i];
          a[i] = Area.updateOne(
            { name: demande.zone.trim() },
            {
              $inc: {
                countPeople: 1
              }
            }
          ).then(ai => console.log(ai.n));
        }
        return a;
      })
      .then(a => {
        return Area.find({});
      })
      .then(areasFound => {
        console.log(areasFound);
        res.setHeader("Content-Type", "application/json");
        let returnedValue = areasFound.map(area => {
          return {
            name: area.name,
            number: area.countPeople
          };
        });
        res.json({
          success: true,
          status: returnedValue
        });
      })
      .catch(e => res.json({ err: e.message }));
  }
};
