const mongoose = require("mongoose");

const DemandeSchema = mongoose.Schema({
  cin: String,
  reason: String,
  date: {
    type: Date,
    default: new Date()
  },
  where: String,
  zone: String,
  state: {
    type: Number,
    default: 1
  },
  score: {
    type: Number,
    default: 0
  },
  tempsRetour: String
});

module.exports = mongoose.model("Demandes", DemandeSchema);
