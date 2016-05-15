var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/:role', function(req, res, next) {
    var role = req.params.role;
    var htmlFile = null;
    if(role == 'manager'){
       htmlFile = path.join(__dirname, '..', 'views','managerPrototype.html')
    } else if (role == 'analyst') {
       htmlFile = path.join(__dirname, '..', 'views','analystPrototype.html')
   } else if (role == 'loginpage' ){
       htmlFile = path.join(__dirname, '..', 'views','login.html')
   } else if (role == 'manageOffsets')
       htmlFile = path.join(__dirname, '..', 'views','manageOffsets.html')

   res.sendFile(htmlFile)
});

module.exports = router;
