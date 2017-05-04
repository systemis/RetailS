module.exports = (router) => {
    var express = require('express');
    var path    = require('path');

    router.get("/", (req, res) => { 
        console.log(req.isAuthenticated());
        console.log(req.use);
        res.sendFile(path.resolve(__dirname, "../..", "build/index.html")); 
    })

    router.post('/check', (req, res) => {
        res.send(req.isAuthenticated());
    })
};