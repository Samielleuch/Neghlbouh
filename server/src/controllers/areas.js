const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Area = require('../models/Areas')
const Demande = require('../models/Demande')
const webpush = require('web-push')
const validate = require('./Validate')
app.use(express.json())
module.exports = {
    addArea(req, res) {
        keys = Object.keys(req.body);
        if (!keys.includes("name") ||
            keys.length !== 1) {
            res.status(422)
            res.setHeader('Content-Type', 'application/json');
            res.json({
                msg: "invalid data"
            });
        }
        Area.create(req.body, (error, data) => {
            if (error) {
                res.send(error)
            } else {
                res.send(data._id)
            }
        })
    },
    getNumber(req, res) {
        if (!req.params.area) {
            console.log(req.params)
            res.status(422);
            res.setHeader('Content-Type', 'application/json');
            res.json({
                msg: "invalid data"
            });
        }
        else {
            let area = req.params.area;
            Demande.find({ state: 1 }, (error, demandes) => { // search for accepted demands
                if (error) res.json(error);
                demandes.forEach(function (demande) {
                    let validate = validate.validate(demande.cin); 
                    let dateDemande = new Date(demande.dateSortie); // check if 
                    let dateNow = new Date().setHours(0, 0, 0, 0);        // these demande 
                    if (dateDemande.getTime() === dateNow) {          // mte3 lyoum
                        Area.updateMany(
                            {},
                            {
                                $set: {
                                    countPeople: 0                 // yraja3 lwileyeet lkol l 0 3beed
                                }
                            }
                        ).then(() => {
                            let time = new Date().getHours();
                            let timeDemande = demande.tempsSortie.split(':')[0];
                            if (time >= timeDemande) {
                                Area.updateOne(
                                    { name: area },
                                    {
                                        $inc: {
                                            countPeople: 1
                                        }
                                    }
                                ).catch(e => {
                                    res.json(e)
                                })
                            }
                        })
                            .catch((e) => {
                                res.json(e)
                            })
                    }
                });
            });

            Area.findOne({ name: area }, (err, areaFound) => {
                if (err) res.json(err)
                if (!areaFound) {
                    res.status(422)
                    res.send('invalid input')
                }
                res.setHeader('Content-Type', 'application/json');
                res.json(areaFound.countPeople);
            });
        }
    }
};
