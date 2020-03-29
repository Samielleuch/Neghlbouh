const express = require("express");
const router = express.Router();
const TestController = require("../../controllers/test");
//the root route for this file is /api/v1/test/
router.get("/", (req, res) => {
  TestController.test(req, res);
});

module.exports = router;
