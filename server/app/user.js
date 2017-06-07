module.exports = (router) => {
    var express       = require('express');
    var path          = require('path');
    var passport      = require('passport');
    var passportLocal = require('passport-local');

    var userDM = require('../models/database-user.js');

    function getUserInfo(req, fn){
        if(req.isAuthenticated()){
            var userEmail = req.user.email;
            var userInfo  = userDM.getUserInformation(userEmail, result => {
                if(result === "err") return fn(result);

                return fn(result);
            })
        }else{
            return fn("Not login!");
        }
    }

    const defaultRouteMethod = (req, res) => {
        console.log(req.isAuthenticated());
        if(req.isAuthenticated()){
            return res.sendFile(path.resolve(__dirname, "../../", "build", "index.html"));
        }

        return res.redirect('/login');
    }

    router.use(passport.initialize());
    router.use(passport.session());

    // Custom passport and check user login info .
    passport.use(new passportLocal.Strategy((username, password, done) => {
        console.log('check');
        console.log(username);
        userDM.checkUser(username, password, (result) => {
            console.log(result);
            switch(result) {
                case "err": 
                    done(null, false, {message:"Có lỗi xảy ra, vui lòng thử lại sau !"});
                    break;
                case "email_c": 
                    done(null, false, {message: "Email chưa được đăng ký ."})
                    break;
                case "password_c": 
                    done(null, false, {message: 'Mật khẩu không đúng .'})
                    break;
                default: 
                    var user = {
                        name : result.name,
                        email: result.email,
                        username: result.name,
                    }
                    done(null, user);
                    break;
            }
        })
    }));

    passport.serializeUser((user, done) => {
        done(null, user);
    })
    passport.deserializeUser((user, done) => {
        done(null, user);
    })


    router.get("/login", (req, res) => {
        if(req.isAuthenticated() === false){
            return res.sendFile(path.resolve(__dirname, "../../", "build", "index.html"));
        }   
        
        res.redirect("/");
    });

    // Handling when client sign in 
    router.post('/sign-in', passport.authenticate('local'), (req, res) => {
        res.redirect('/');
    })

    router.post('/logout', (req, res) => {
        if(req.isAuthenticated()){
            req.logout();
            res.send(true);
        }
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

    router.post('/check-login', (req, res) => {
        if(req.isAuthenticated()){
            console.log(req.user);
            res.send(req.user);
        }else{
            console.log('Chua dang nhap. ');
            return res.send(false);
        }
    })

    router.get('/my-account', defaultRouteMethod);
    router.get('/my-account/cart', defaultRouteMethod);
    router.get('/my-account/change-password', defaultRouteMethod);
    router.get('/my-account/new-product', defaultRouteMethod);

    router.get('/get-user-information', (req, res) => {
        getUserInfo(req, result => res.send(result));
    })

    router.post('/check-out', (req, res) => {
        getUserInfo(req, info => {
            if(info !== "Not login!"){
                console.log(info.andress);
                console.log(info.phonenumber);

                if(info.andress && info.phonenumber){
                    // Check out heppend here 
                    const exhibition = req.body.data;

                    console.log("Khach hang: " + info.email + " da dat kho hang: " + exhibition);
                }else{
                    return res.send("Info correct");
                }
            }
        })
    })

    router.post('/update-user-information', (req, res) => {
        if(req.isAuthenticated()) {
            var updateData = req.body;
            userDM.updateUserInfo(req.user.email, updateData.name, updateData.andress, updateData.phonenumber, (rs) => {
                console.log(rs);
                if(rs === 'err') return res.send("Có lỗi xảy ra, vui lòng thử lại sau !");

                req.user.username = updateData.name;
                res.redirect('/my-account');
            });
        }
    })

    router.post('/change-user-password', (req, res) => {
        if(req.isAuthenticated()) {
            var email   = req.user.email;
            var oldPass = req.body.oldPass;
            var newPass = req.body.newPass;
            userDM.checkUser(email, oldPass, (result) => {
                if(result === "password_c") return res.send("password_c");

                userDM.changePasswordUser(email, newPass, (result_) => {
                    if(result_ === "err") return res.send("err");

                    res.send("Success!");
                })
            })
        }
    })

    router.post('/check-admin', (req, res) => {
        if(req.isAuthenticated()) {
            if(req.user.email === "systemofpeter@gmail.com"){
                return res.send(true);
            }

            return res.send(false);
        }

        return res.send(false);
    })
}