var express = require('express');
var router = express.Router();
var db = require('../db_config.js');
var moment = require("moment");


router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.post('/addComment', function(req, res, next) {
    comment = req.body.comment;
    authorId = req.body.analystId;
    claimId = req.body.claimId;
    creation_date = moment().utc().format("YYYY-MM-DD hh:mm:ss")

    db.raw(
        "insert into event (claim_id, comment, employee_id, type, creation_date) "+
        "values ("+ claimId +  ", '"+  comment + "', " + authorId + ", " +
        "'comment', '" +  creation_date.toString()+"')")
    .then(function(payload,err){
        if (err)
            res.json({"message":"error"})
        else
            res.json({'message':'confirmed'});
    });
});

router.post('/getEvents',function(req,res, err){
    var claimId = req.body.claimId;

    db.raw(
        "select * from event where claim_id = " + claimId
    ).then(function(payload){
        json.send(payload.rows);
    });
})

router.post('/deleteEvent', function(req,res,err){
    var eventId = req.body.eventId;

    db.raw("delete from event where event_id = " + eventId)
    .then(function(confirmation){
        json.send({"message":"confirmed delete"});
    });
});


module.exports = router;
