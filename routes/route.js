const express = require('express');
var cors = require('cors')
const router = express.Router();
const maincontroller = require('../controllers/mainController');
router.get('/all',cors(),maincontroller.all);

module.exports = router;