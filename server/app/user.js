
module.exports = (router) => {
    var express       = require('express');
    var path          = require('path');
    var passport      = require('passport');
    var passportLocal = require('passport-local');

    var userDM = require('../models/database-user.js');

    router.use(passport.initialize());
    router.use(passport.session());

    // Custom passport and check user login info .
    passport.use(new passportLocal.Strategy((username, password, done) => {
        console.log('check');
        console.log(username);
        userDM.checkUser(username, password, (result) => {
            switch(result) {
                case "err": 
                    return done(null, false, {message:"Có lỗi xảy ra, vui lòng thử lại sau !"});
                    break;
                case "email_c": 
                    return done(null, false, {message: "Email chưa được đăng ký ."})
                    break;
                case "password_c": 
                    return done(null, false, {message: 'Mật khẩu không đúng .'})
                    break;
                default: 
                    var user = {
                        name : result.name,
                        email: result.email
                    }
                    done(null, user);
                    break;
            }
        })
    }));

    passport.serializeUser((user, done) => {
        console.log(user);
        done(null, user);
    })
    passport.deserializeUser((user, done) => {
        console.log(user);
        done(null, user);
    })


    router.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../", "build", "index.html"));
    });

    // Handling when client sign in 
    router.post('/sign-in', passport.authenticate('local'), (req, res) => {
        res.redirect('/');
    })
    
    // Handling when client retisger 
    router.post('/sign-up', (req, res) => {
        console.log(req.body);
        var name     = req.body.name;
        var email    = req.body.email;
        var password = req.body.password;
        
        console.log(name);
        console.log(email);
        console.log(password);
        
        userDM.newUser(name, email, password, (result) => {
            console.log(result);
            if(result === false) {
                return res.send("Ten dang nhap da ton tai");
            }else{
                res.send('Success');
            }
        })
    })
}