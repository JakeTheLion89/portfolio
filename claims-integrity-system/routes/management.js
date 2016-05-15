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
    console.log(req.body)
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

router.post('/approveOffset',function(req,res,next){
    var claimId = req.body.claimId;
    var authorId = req.body.employeeId;

    var sql = "update claim set status = 'completed', refund_type = 'offset'"
                'where id = ' + claimId;
    db.raw(sql)
    .then(function(){
        var comment = "Offset Approved"

        var sql2 = "insert into event (claim_id, comment, employee_id, type, creation_date) "+
        "values ("+ claimId +  ", '"+  comment + "', " + authorId + ", " +
        "'comment', '" +  creation_date.toString() + " )";
    })
    .then(function(){
        if (err){
            var confirmation = {"message":false}
            res.json(confirmation)
        }
        var confirmation = {"message":true}
        res.json(confirmation)
    })
})

router.post('/rejectOffset',function(req,res,next){
    var claimId = req.body.claimId;
    var authorId = req.body.employeeId;

    var sql = "update claim set status = 'active'"
                'where id = ' + claimId;
    db.raw(sql)
    .then(function(){
        var comment = "Offset rejected"

        var sql2 = "insert into event (claim_id, comment, employee_id, type, creation_date) "+
        "values ("+ claimId +  ", '"+  comment + "', " + authorId + ", " +
        "'comment', '" +  creation_date.toString() + " )";
    })
    .then(function(){
        if (err){
            var confirmation = {"message":false}
            res.json(confirmation)
        }
        var confirmation = {"message":true}
        res.json(confirmation)
    })
})


module.exports = router;
