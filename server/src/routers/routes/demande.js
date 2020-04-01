const express = require("express");
const router = express.Router();
const DemandeController = require('../../controllers/demande')

//add "demande" to database
router.post("/add", (req, res) => {
  DemandeController.addDemande(req, res);
});

// accept demande (state -> 1)
router.put("/state/1",(req,res)=>{

});

router.put("/state/0",(req,res)=>{
  
});
module.exports = router;
