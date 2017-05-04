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
                console.log(err);
            }else if(result.length < 0) {
                return fn("email_c");
            } 
            
            if( result[0] === user.password) {
                fn(result[0]);
            }else{
                fn("password_c");
            }
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

    this.deleteTable = (fn) => {
        connection.query("DROP TABLE "+tableName+"", (err, result) => {
            if(err) return console.log(err);

            fn(result);
        })
    }
}

module.exports = new UserDataManager();