var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');
controller(router);

module.exports = router;