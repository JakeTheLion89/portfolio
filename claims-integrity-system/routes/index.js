var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/index.html'))
  });

router.get('/analystPrototype', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/analystPrototype.html'))
  });

router.get('/managerPrototype', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/managerPrototype.html'))
  });

module.exports = router;
