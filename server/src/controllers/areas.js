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
        Demande.find({ state: 1 }, (error, demandes) => {
          // search for accepted demands
          if (error) res.json({ err: error.message });
          (async function() {
            let a = Array();
            for (let i = 0; i < demandes.length; i++) {
              let demande = demandes[i];
              checkTime(demande.cin, res)
                .then(async n => {
                  let dateDemande = demande.date.setHours(0, 0, 0, 0); // check if
                  let dateNow = new Date().setHours(0, 0, 0, 0); // these demande
                  if (dateDemande === dateNow) {
                    // mte3 lyoum
                    let time = new Date().getHours();
                    let timeDemande = +demande.tempsRetour.split(":")[0];
                    if (time <= timeDemande) {
                      a[i] = await Area.updateOne(
                        { name: demande.zone.trim() },
                        {
                          $inc: {
                            countPeople: 1
                          }
                        }
                      ).catch(e => {
                        res.json({
                          err: e.message
                        });
                      });
                    }
                  }
                })
                .catch(e => res.json({ err: e.message }));
            }
            return a;
          })().then(() => {
            setTimeout(() => {
              Area.find({}, (err, areasFound) => {
                console.log(areasFound);
                if (err) res.json(err);
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
              }).catch(e => res.json({ err: e.message }));
            }, 3000); // solution bhiima 7atteksh l nal9a 7all .. :'(
          });
        }).catch(e => res.json({ err: e.message }));
      })
      .catch(e => res.json({ err: e.message }));
  }
};

async function checkTime(cin, res) {
  try {
    const all = await Demande.find({
      cin: cin,
      state: 1
    });
    all.forEach(async a => {
      const time = a.tempsRetour.split(":");
      const tempsRetour = +time[0] * 60 + +time[1];
      const date = new Date();
      const temps = date.getHours() * 60 + date.getMinutes();
      if (a.state !== 0) {
        if (temps > tempsRetour) {
          const updatedDocument = await Demande.updateOne(
            {
              _id: a._id
            },
            {
              $set: {
                state: 0
              }
            }
          );
        }
      }
    });
    return 1;
  } catch (e) {
    res.json({
      err: e
    });
  }
}
