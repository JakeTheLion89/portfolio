var express = require('express');
var router = express.Router();

router.get('/prototype', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/managerPrototype.html'))
  });

module.exports = router;
