var express = require('express');
var path    = require('path');
var router  = express.Router(); 

router.get((req, res) => { 
    res.sendFile(path.resolve(__dirname, "..", "build/index.html")); 
})

module.exports = router;