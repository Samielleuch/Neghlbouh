const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
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
    },
    admin: {
       type: Boolean,
       default: false
    }
});


User.plugin(passportLocalMongoose, {
  usernameField: 'cin',
  passwordField: 'password'
});

module.exports = mongoose.model('User', User);