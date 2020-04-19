const express = require("express");
const router = express.Router();
const DemandeController = require("../../controllers/demande");
const mongoose = require("mongoose");
const Demande = require("../../models/Demande");
const authenticate = require("../../authenticate");
const validate = require("../../controllers/Validate");

//check time for all routes
router.all("*", (req, res, next) => {
  DemandeController.checkTime(req, res, next);
  console.log("checked");
});

//add "demande" to database
router.post("/add", (req, res) => {
  DemandeController.addDemande(req, res);
});

// accept demande (state -> 1)
//deny demande (state -> 2)
router.put("/state/:id", (req, res) => {
  DemandeController.changeState(req, res);
});

//get all demands for user connected
router.get("/", authenticate.verifyOrdinaryUser, (req, res, next) => {
  Demande.find({
    cin: req.user.cin
  })
    .then(resp => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        status: resp
      });
    })
    .catch(err => {
      res.json({
        err: err.message
      });
    });
});

/*router.get('/valid/:cin', authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
  Demande.find({
    'cin': req.params.cin,
    'state': 1
  }).then((demand) => {
    if(demand!=null){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({"message": "Citizen approved"});
    }
    else{
      err = new Error('Citizen not approved');
      err.status = 404;
      return next(err);
    }
  },(err) => next(err))
      .catch((err) => next(err));
});
*/

router.get("/valid/:cin", (req, res) => {
  (async function getValidation() {
    // okay , this is complicated XD , the validate() returns a promise
    if (!req.params.cin) {
      // we gotta wait for the promise, but when we send directly the returned value
      res.status(422); // we are sending a promise.. so we need to make another promise that waits for
      res.json({
        // the promise in the validate function .. XD adheka sha3malt lenna 7asilou
        err: "invalid input"
      });
    } else {
      let response = await validate.validate(req.params.cin);
      res.send({
        success: true,
        status: response
      });
    }
  })();
});
//get all pending requests
router.get(
  "/pending",
  authenticate.verifyOrdinaryUser,
  /*authenticate.verifyAdmin,*/ (req, res, next) => {
    Demande.find({
      state: 0
    })
      .then(resp => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
          success: true,
          status: resp
        });
      })
      .catch(err => {
        res.json({
          err: err.message
        });
      });
  }
);
//get demande by id for a specific user
router
  .route("/:demandId")
  .get(authenticate.verifyOrdinaryUser, (req, res, next) => {
    Demande.find({
      _id: req.params.demandId,
      cin: req.user.cin
    })
      .then(demand => {
        if (demand != null) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({
            success: true,
            status: demand
          });
        } else {
          res.json({
            err: "the requested demand not found !!"
          });
        }
      })
      .catch(err => {
        res.json({
          err: err.message
        });
      });
  })
  .put(authenticate.verifyOrdinaryUser, (req, res, next) => {
    Demande.update(
      {
        _id: req.params.demandId,
        cin: req.user.cin
      },
      {
        $set: req.body
      },
      { new: true }
    )
      .then(demand => {
        if (demand != null) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({
            success: true,
            status: demand
          });
        } else {
          err = new Error("the requested demand not found!!");
          err.status = 404;
          res.send({
            err: err.message
          });
        }
      })
      .catch(err => {
        res.json({
          err: err.message
        });
      });
  })

  .delete(authenticate.verifyOrdinaryUser, (req, res, next) => {
    Demande.remove({
      _id: req.params.demandId
      //'cin': req.user.cin
    })
      .then(resp => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
          success: true,
          status: resp
        });
      })
      .catch(err => res.send({ err: err.message }));
  });

module.exports = router;
