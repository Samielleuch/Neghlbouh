const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Demande = require('../models/Demande')

app.use(express.json())

module.exports = {

    async validate(req, res) {
        a = await Demande.find({
            'cin': req.user.cin,
            'state': 1 || 0
        })
        const time = a.tempsRetour.split(':')
        const tempsRetour = +(time[0]) * 60 + time[1]
        const date = new Date()
        const temps = date.getHours()*60 + date.getMinutes()
        if (a == null){
            return ({"message": "citizen not approved"})
        }
        if (a.state ==1){
            return a;
        }
        else {
            if (temps > tempsRetour){
                return a;
            }
            else{
                return ({"message": "citizen approved"})
            }
        }



        }

    }

