const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Area = require('../models/Areas')
const webpush = require('web-push')

app.use(express.json())
module.exports = {
    addArea(req, res) {
        keys = Object.keys(req.body);
        if (!keys.includes("cin") ||
            keys.length !== 1) {
            res.status(422)
            res.send("invalid data")
        }
        Area.create(req.body, (error, data) => {
            if (error) {
                res.send(error)
            } else {
                res.send(data._id)
            }
        })
    },
};
