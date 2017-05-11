const connection = require('../config/mainDB.js');
const tableName  = "UserData";

function UserDataManager(){
    this.createTable = (fn) => {
        connection.query("CREATE TABLE IF NOT EXISTS UserData (`name` TEXT NOT NULL , `email` VARCHAR(200) NOT NULL , `password` TEXT NOT NULL , `andress` TEXT NOT NULL , `phonenumber` TEXT NOT NULL , PRIMARY KEY (`email`))", (err, result) => {
            if(err) return console.log(err);

            console.log(result);
        })
    }

    this.checkUser = (email, password, fn) => {
        connection.query("SELECT * FROM UserData WHERE email = ?", [email], (err, result, field) => {
            if(err){
                console.log(err);
                return fn("err");
            }else if(result.length < 0) {
                return fn("email_c");
            } 
            
            if(password === result[0].password) {
                return fn(result[0]);
            }else{
                return fn("password_c");
            }
        })
    }

    this.getUserInformation = (email, fn) => {
        connection.query("SELECT * FROM "+tableName+" WHERE email = ?", [email], (err, result) => {
            if(err){
                console.log(err);
                return fn('err');
            }

            fn(result[0]);
        })
    }

    this.newUser = (name, email, password, fn) => {
        connection.query("INSERT INTO "+tableName+" SET ?", {name: name, email: email, password: password} , (err, result, field) => {
            if(err) {
                console.log(err);
                return fn(false);
            }

            console.log(result);
            console.log(field);
            return fn(true);
        });
    }

    this.updateUserInfo = (email, name, andress, phonenumber, fn) => {
        connection.query("UPDATE "+tableName+" SET name = ?, andress = ?, phonenumber = ? WHERE email = ?", [name, andress, phonenumber, email], (err) => {
            if(err) {
                console.log(err);
                return fn("err");
            }

            return fn("Success");
        })
    }

    this.changePasswordUser = (email, newPassword, fn) => {
        connection.query("UPDATE "+tableName+" SET password = ? WHERE email = ?", [newPassword, email
        ], (err, result) => {
            if(err) {
                console.log(err);
                return fn("err");
            }

            return fn("Success");
        })
    }

    this.deleteTable = (fn) => {
        connection.query("DROP TABLE "+tableName+"", (err, result) => {
            if(err) return console.log(err);

            fn(result);
        })
    }
}

module.exports = new UserDataManager();