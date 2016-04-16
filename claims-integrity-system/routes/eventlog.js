var express = require('express');
var router = express.Router();
var db = require('../db_config.js');
var moment = require("moment");

var counter = 0;

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

module.exports = router;
