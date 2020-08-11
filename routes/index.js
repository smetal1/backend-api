var express = require('express');
var router = express.Router();
var CityController = require("../components/city/controller/cityController")
/* GET home page. */
router.get('/', CityController.getCity)

module.exports = router;
