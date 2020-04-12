const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const config = require('../../config/config.js');

router.post('/', (req, res) => {
    const io = req.app.get('socketio');
    const BracletsInfo = {cin : req.body.cin ,  coordinates : [req.body.long ,req.body.lat]};
    io.emit('bracletIsMoving', BracletsInfo);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(BracletsInfo);

});

module.exports = router; 