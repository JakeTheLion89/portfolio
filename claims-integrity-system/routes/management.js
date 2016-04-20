var express = require('express');
var router = express.Router();
var db = require('../db_config.js')

router.get('/getAllClaims', function(req, res, next) {
    var sql = 'select * from claim';
    db.raw(sql).then(function(payload){
        res.json(payload.rows)
    })

  });

router.post('/assignClaimToAnalyst', function(req,res,next){
    var claimId = req.body.claimId;
    var analystId = req.body.analystId;

    var sql = 'update claim set analyst_employee_id = ' + analystId +
              'where id = ' + claimId;

    db.raw(sql).then(function(payload,err){
        if(err){
            res.json({'message':err});
        }else{
            res.json({'message':'success'});
        };
    });
})

module.exports = router;
