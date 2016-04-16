var express = require('express');
var router = express.Router();
var db = require('../db_config.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({'message':'this is the document maker api'});
});

router.post('/uploaddata', function(req, res, next){

    payload = req.body;
    changes = payload.message.toUpperCase()
    res.json({'output':'this is the message',
              'whatYouSent':payload,
              'myChange':changes});

});

module.exports = router;
