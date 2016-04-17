var express = require('express');
var router = express.Router();
var db = require('../db_config.js')


/* GET users listing. */

router.options("/*", function(req, res, next) {
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

module.exports = router;
