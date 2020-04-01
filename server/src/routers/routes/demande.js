const express = require("express");
const router = express.Router();
const DemandeController = require('../../controllers/demande')

router.post("/add", (req, res) => {
  DemandeController.addDemande(req, res);
});

module.exports = router;
