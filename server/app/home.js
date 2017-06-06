module.exports = (router) => {
    var express = require('express');
    var path    = require('path');

    router.get("/", (req, res) => { 
        console.log(req.isAuthenticated());
        console.log(req.user);
    })
};
