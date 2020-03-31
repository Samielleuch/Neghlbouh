var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcrypt');

var User = new Schema({
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    cin:   {
        type: String,
        required: true
    },
    email:   {
      type: String,
      required: true
    },
    job:   {
      type: String,
      required: true
    }
});


User.plugin(passportLocalMongoose, {
  usernameField: 'cin',
  passwordField: 'password'
});

module.exports = mongoose.model('User', User);