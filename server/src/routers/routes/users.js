const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../../models/user");
const passport = require("passport");
const authenticate = require("../../authenticate");
const twilio = require("twilio");
const config = require("../../config/config.js");
const client = require("twilio")(config.accountSid, config.authToken);
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const moment = require("moment");
const nodemailer = require("nodemailer");

const ResetPassword = require("../../models/resetPassword");

router.use(bodyParser.json());

router.post("/signup", (req, res, next) => {
  User.register(
    new User({
      area: req.body.area,
      cin: req.body.cin,
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
      phone: req.body.phone
    }),
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
        let message="";
        if(err.message) message=err.message;
        if(err.errors){
          Object.keys(err.errors).forEach(key => {
            message+=err['errors'][key].message+" , "
            
          });
        }
        res.statusCode = 403;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: {message:message} });
      } else {
        passport.authenticate("local")(req, res, () => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ success: true, status: "Registration Successful!" });
        });
      }
    }
  );
});

router.post("/signin",  (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    if (! user) {
      res.statusCode = 403;
      return res.send({err:{message:"Cin or password are incorrect!"}});
    }
    req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
      const token = authenticate.getToken({ _id: req.user._id });
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      let user = req.user.toObject();
      delete user.hash;
      delete user.salt;
     
      return  res.json({ success: true, token: token, user: user });
    });      
  })(req, res, next);

  
});

router.route("/").post((req, res, next) => {
  client.messages
    .create({
      body:
        "cc cest zak ma9wéni <3 put this code to reset your password: 9999 ",
      from: config.numero,
      to: "+21699005484"
    })
    .then(message => console.log(message.sid));
});

router.route("/").put(authenticate.verifyOrdinaryUser, (req, res, next) => {
  let fieldToChange = { init: "" };
  if (req.body.name !== "") {
    delete fieldToChange.init;
    fieldToChange.name = req.body.name;
  }
  if (req.body.cin !== "") {
    delete fieldToChange.init;
    fieldToChange.cin = req.body.cin;
  }
  if (req.body.area !== "") {
    delete fieldToChange.init;
    fieldToChange.area = req.body.area;
  }
  if (req.body.email !== "") {
    delete fieldToChange.init;
    fieldToChange.email = req.body.email;
  }
  if (req.body.city !== "") {
    delete fieldToChange.init;
    fieldToChange.city = req.body.city;
  }
  if (req.body.phone !== "") {
    delete fieldToChange.init;
    fieldToChange.phone = req.body.phone;
  }
  if (fieldToChange.init) {
    fieldToChange = null;
  }
  if (req.body.oldPassword !== "") {
    User.findById(req.user._id)
      .then(
        user => {
          if (user != null) {
            user
              .changePassword(req.body.oldPassword, req.body.newPassword)
              .then(() => {
                console.log("password changed");
                if (fieldToChange) {
                  User.updateOne(
                    {
                      _id: req.user._id
                    },
                    {
                      $set: fieldToChange
                    },
                    { new: true }
                  )
                    .then(
                      user => {
                        if (user != null) {
                          res.statusCode = 200;
                          res.setHeader("Content-Type", "application/json");
                          res.json(user);
                        } else {
                          err = new Error("the request user not found !!");
                          err.status = 404;
                          return next(err);
                        }
                      },
                      err => next(err)
                    )
                    .catch(err => next(err));
                } else {
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.json(user);
                }
              })
              .catch(error => {
                err = new Error("the old password is incorrect !!");
                err.status = 404;
                return next(err);
              });
          } else {
            err = new Error("the request user not found !!");
            err.status = 404;
            return next(err);
          }
        },
        err => next(err)
      )
      .catch(err => next(err));
  } else if (fieldToChange) {
    User.updateOne(
      {
        _id: req.user._id
      },
      {
        $set: fieldToChange
      },
      { new: true }
    )
      .then(
        user => {
          if (user != null) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(user);
          } else {
            err = new Error("the request user not found !!");
            err.status = 404;
            return next(err);
          }
        },
        err => next(err)
      )
      .catch(err => next(err));
  }
});
router.post("/reset-password", (req, res, next) => {
  const email = req.body.email;
  User.findOne({
    email: email //checking if the email address sent by client is present in the db(valid)
  })
    .then(function(user) {
      if (!user) {
        next(Error("No user found with that email address."));
      }
      ResetPassword.findOne({ userId: user._id })
        .then(function(resetPassword) {
          if (resetPassword)
            resetPassword.deleteOne({
              _id: resetPassword.id
            });
          token = crypto.randomBytes(32).toString("hex"); //creating the token to be sent to the forgot password form (react)
          
          bcrypt
            .genSalt(10)
            .then(salt => {
              bcrypt
                .hash(token, salt, null)
                .then(hash => {
                  //hashing the password to store in the db node.js
                  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
                  var transporter = nodemailer.createTransport({
                    host: "smtp-mail.outlook.com", // hostname
                    secureConnection: false, // TLS requires secureConnection to be false
                    port: 587, // port for secure SMTP
                    auth: {
                      user: config.emailUser,
                      pass: config.emailPassword
                    },
                    tls: {
                      ciphers: "SSLv3"
                    }
                  });

                  ResetPassword.create({
                    userId: user._id,
                    resetPasswordToken: hash,
                    expire: moment.utc().add(config.tokenExpiry, "seconds")
                  })
                    .then(function(item) {
                      if (!item)
                        return Error(
                          "Oops problem in creating new password record"
                        );
                      let mailOptions = {
                        from: config.emailUser,
                        to: user.email,
                        subject: "Reset your account password",
                        html:
                          "<h4><b>Reset Password</b></h4>" +
                          "<p>To reset your password, complete this form:</p>" +
                          '<a href="http:\/\/' +
                          config.clientUrl +
                          "reset?id=" +
                          user.id +
                          "&token=" +
                          token +
                          '">Click here to reset your password!</a>' +
                          "<br><br>" +
                          "<p>--Neghlbouh Support</p>"
                      };
                      transporter
                        .sendMail(mailOptions)
                        .then(info => {
                          res.statusCode = 200;
                          res.setHeader("Content-Type", "application/json");
                          res.json({
                            success: true,
                            message: "Check your mail to reset your password."
                          });
                        })
                        .catch(err => {
                          next(err);
                        });
                    })
                    .catch(err => {
                      next(err);
                    });
                })
                .catch(err => {
                  next(err);
                });
            })
            .catch(err => {
              next(err);
            });
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/store-password", (req, res, next) => {
  //handles the new password from the front
  const userId = req.body.userId;
  const token = req.body.token;
  const password = req.body.password;
  ResetPassword.findOne({ userId: userId }).then(function(resetPassword) {
    if (!resetPassword) {
      next(Error("Invalid or expired reset token."));
    }
    bcrypt.compare(token, resetPassword.token, function(errBcrypt, resBcrypt) {
      // the token and the hashed token in the db are verified befor updating the password
      let expireTime = moment.utc(resetPassword.expire);
      let currentTime = new Date();
      User.findById(userId)
        .then(user => {
          if (user != null) {
            user
              .setPassword(password)
              .then(user => {
                user.save();
                ResetPassword.deleteOne({ _id: resetPassword.id })
                  .then(msg => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json({
                      success: true,
                      message: "Password Updated successfully."
                    });
                  })
                  .catch(err => {
                    next(err);
                  });
              })
              .catch(err => {
                next(err);
              });
          }
        })
        .catch(err => {
          next(err);
        });
    });
  });
});

router.post("/verify-token", (req, res, next) => {
  //verify if the reset is expired or not
  const id= req.body.userId;
  ResetPassword.findOne({ userId: id })
    .then(function(resetPassword) {
     
      if (!resetPassword) {
        err = new Error("Invalid or expired reset token.");
        err.status = 404;
        next(err);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({ success: true, message: "token is valid!" });
      }
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
