var express = require('express');
var router = express.Router();
var db = require('../db_config.js')


/* GET users listing. */

router.get('/prototype', function(req, res, next) {
  console.log(__dirname+'../views/analystPrototype.html');
  res.sendFile(path.join(__dirname + '../views/analystPrototype.html'))
  });


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

module.exports = router;
