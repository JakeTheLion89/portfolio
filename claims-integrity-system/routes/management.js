var express = require('express');
var router = express.Router();
var db = require('../db_config.js')

router.get('/getAllClaims', function(req, res, next) {
    var sql = 'select * from claims';
    db.raw(sql).then(function(payload){
        res.json(payload.rows)
    })

  });

module.exports = router;
