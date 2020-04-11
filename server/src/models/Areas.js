const mongoose = require("mongoose");

const AreaSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  countPeople: {
    type: Number,
    default: 0
  },
  coor: {
    type: Array
  }
});

module.exports = mongoose.model("Area", AreaSchema);
