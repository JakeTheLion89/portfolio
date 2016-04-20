var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/:role', function(req, res, next) {
    role = req.params.role
    if(role == 'manager'){
       var htmlFile = path.join(__dirname, '..', 'views','managerPrototype.html')
       console.log(htmlFile);
       res.sendFile(htmlFile);
   } else if (role == 'analyst') {
       res.json({dame:'dan'});    
    }
  });

module.exports = router;
