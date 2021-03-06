var express = require('express');
var router = express.Router();
var db = require('../db_config.js')
var moment = require('moment')

/* GET users listing. */


router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


router.get('/', function(req, res, next) {
  res.json({'message':'this is analysts api'});
});

router.post('/reqAnalystClaims',function(req,res,err){
  console.log(req.body)
  analystId = req.body.analystId;
  console.log(analystId);
  sql = 'select * from claim where analyst_employee_id = ' + analystId;
  console.log(sql)
  db.raw(sql)
  .then(function(payload){
      console.log(payload.rows.length)
      res.json(payload.rows);
  })
});


router.post('/getFullClaimData',function(req, res, err){
    var claimId = req.body.claimId;
    var sql1 = 'select * from claim where id ='+claimId;
    db.raw(sql1)
    .then(function(payload){
        var payloadClaim = payload.rows[0]
        var sql2 = 'select * from provider where id = ' + payloadClaim.provider_id
        db.raw(sql2)
        .then(function(payload2){
            var claimsData = {
                'claim' : payloadClaim,
                'provider' : payload2.rows[0]
            }
            res.json(claimsData);
        })
    })
});

router.post('/createRefund',function(req,res,err){
    var claimId = req.body.claimId;
    var refundAmt = req.body.refundAmt.toString();
    var claimStatus = req.body.claimStatus;
    var authorId = req.body.employeeId;
    var creationDate = moment().utc().format("YYYY-MM-DD hh:mm:ss")

    // first update the claim on how much is still owed
    var sql1 = "update claim set refund_type = 'refund' " +
               ", status = 'refunded' " +
              " where id = " + claimId

    console.log(sql1)
    db.raw(sql1)
    // then put in an event
    .then(function(err){
        if (err) console.log(err);
        var creationDate = moment().utc().format("YYYY-MM-DD hh:mm:ss")
        var comment = "Refund of $" + refundAmt + " submitted";

        var sql2 = "insert into event (claim_id, comment, employee_id, type, creation_date) "+
        "values ("+ claimId +  ", '"+  comment + "', " + authorId + ", " +
        "'comment', '" +  creationDate.toString() + " ')";
        db.raw(sql2)
        .then(function(){
            var confirmation = {"message":true}
            res.json(confirmation)
        })
    })
})

router.post('/createOffset',function(req,res,err){
    var claimId = req.body.claimId;
    var claimStatus = req.body.claimStatus;
    var authorId = req.body.employeeId;
    var creationDate = moment().utc().format("YYYY-MM-DD hh:mm:ss")

    var sql1 = "update claim set refund_type = '" + claimStatus +
               "', status = 'awaiting offset approval' " +
              " where id = " + claimId

    db.raw(sql1)
    .then(function(){
        var creationDate = moment().utc().format("YYYY-MM-DD hh:mm:ss")
        var comment = "Offset request sent for approval."

        var sql2 = "insert into event (claim_id, comment, employee_id, type, creation_date) "+
        "values ("+ claimId +  ", '"+  comment + "', " + authorId + ", " +
        "'comment', '" +  creationDate.toString() + "' )";
        db.raw(sql2)
        .then(function(){
            var confirmation = {"message":true}
            console.log(confirmation)
            res.json(confirmation)
        })
    })

})


module.exports = router;
