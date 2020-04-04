const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../../models/user");
const passport = require("passport");
const authenticate = require("../../authenticate");
const twilio = require("twilio");
const config = require("../../config/config.js");
const client = require("twilio")(config.accountSid, config.authToken);

router.use(bodyParser.json());

router.post("/signup", (req, res, next) => {
  User.register(
    new User({
      cin: req.body.cin,
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
      phone: req.body.phone
    }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
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

router.post("/signin", passport.authenticate("local"), (req, res) => {
  const token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;

  res.setHeader("Content-Type", "application/json");
  let user = req.user.toObject();
  delete user.hash;
  delete user.salt;
  res.json({ success: true, token: token, user: user });
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

router
  .route("/:userId")
  .put(authenticate.verifyOrdinaryUser, (req, res, next) => {
    if (req.params.userId == req.user._id) {
      if (req.body.oldPassword) {
        User.findById(req.user._id)
          .then(
            user => {
              if (user != null) {
                user
                  .changePassword(req.body.oldPassword, req.body.newPassword)
                  .then(() => {
                    console.log("password changed");
                    if (req.body.otherFields) {
                      User.update(
                        {
                          _id: req.params.userId
                        },
                        {
                          $set: req.body.otherFields
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
      } else if (req.body.otherFields) {
        User.update(
          {
            _id: req.params.userId
          },
          {
            $set: req.body.otherFields
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
    } else {
      err = new Error("You'r not authorized to update this user!!");
      err.status = 403;
      return next(err);
    }
  });

module.exports = router;
