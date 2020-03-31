const mongoose = require('mongoose')

const DemandeSchema = mongoose.Schema({
    cin: String,
    firstName: String,
    lastName: String,
    reason: String,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Demandes", DemandeSchema)