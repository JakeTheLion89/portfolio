var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({'message':'this is the document maker api'});
});

module.exports = router;
