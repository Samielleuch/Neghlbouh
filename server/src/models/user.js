const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  cin: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  }
});

User.plugin(passportLocalMongoose, {
  usernameField: "cin",
  passwordField: "password"
});

module.exports = mongoose.model("User", User);
