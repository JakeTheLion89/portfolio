var express = require('express');
var router = express.Router();
var moment = require('moment');
var ObjectID = require('mongodb').ObjectID;


/* GET home page. */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('jakestodo');
    collection.find({},{},function(e,docs){
        for(var i=0;i<docs.length;i++){
            if(docs[i].is_it_done == "true"){
                docs.splice(i,1);
            };
        };
        res.render('index',
            { title : 'Leonen\'s-Welcome',
             "todo" : docs.reverse()
            }
        );
    });
});

router.get('/helloworld',function(req,res){
    res.render('helloworld',{title:'Hello World'});
});

router.get('/aboutus',function(req,res){
    var db = req.db;
    var collection = db.get('family');
    collection.find({},{},function(e,docs){
        console.log(docs);
        res.render('About Us',{"familylist":docs});
    });
});

router.get('/jakestodolist',function(req,res){
    var db = req.db;
    var collection = db.get('jakestodo');
    collection.find({},{},function(e,docs){
        for(var i=0;i<docs.length;i++){
            if(docs[i].is_it_done == "true"){
                docs.splice(i,1);
            };
        };
        res.render('jakestodolist',
            { title : 'Jake\'To Do',
              "todo" : docs.reverse()
            }
        );
    });
});

router.post('/confirmdone/:id',function(req,res){
    var db = req.db;
    var collection = db.get('jakestodo');
    var taskId = ObjectID(req.params.id);
    console.log(taskId);
    collection.update({'_id':taskId},{$set:{is_it_done:'true'}},
        function(err,doc){
            if (err){
                res.send("OOPS \n We screwed up");
            }else{
                res.location('/jakestodolist');
                res.redirect('/jakestodolist');
            };
        }
    );
});

router.post('/confirmaddreminder', function(req,res){
    var db = req.db;
    var reminder = req.body.reminder;
    var requester = req.body.requester;
    var collection = db.get('jakestodo');

    var reminderObj = {
	description:reminder,
	day_posted: moment().format('l'),
	time_posted:moment().format('LT'),
	requester:requester,
    is_it_done:false
    };

    collection.insert(reminderObj,
		function(err,doc){
            if (err){
		        res.send("OOPS \n We screwed up");
		    }else{
                res.location('/');
                res.redirect('/');
    	    };
    });
});

module.exports = router;
