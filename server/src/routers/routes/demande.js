const express = require("express");
const router = express.Router();
const DemandeController = require('../../controllers/demande')

//add "demande" to database
router.post("/add", (req, res) => {
  DemandeController.addDemande(req, res);
});

// accept demande (state -> 1)
//deny demande (state -> 2)
router.put("/state/:id",(req,res)=>{
  DemandeController.changeState(req,res);
});

module.exports = router;
