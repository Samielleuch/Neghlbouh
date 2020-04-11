const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Demande = require("../models/Demande");

app.use(express.json());

module.exports = {
  async validate(cin) {
    const a = await Demande.find({
      cin: cin,
      state: {
        $in: [0, 1]
      }
    });
    if (a[0] == null) {
      return { message: "citizen not approved" };
    }
    const time = a[0].tempsRetour.split(":");
    const tempsRetour = +time[0] * 60 + +time[1];
    const date = new Date();
    const temps = date.getHours() * 60 + date.getMinutes();
    if (a[0].state == 0) {
      return a[0];
    } else {
      if (temps > tempsRetour) {
        const updatedDocument = await Demande.updateOne(
          {
            _id: a[0]._id
          },
          {
            $set: {
              state: 2
            }
          }
        );
        if (updatedDocument) {
          return a[0];
        }
      } else {
        return { message: "citizen approved" };
      }
    }
  }
};
