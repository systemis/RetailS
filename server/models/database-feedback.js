const connection = require('../config/mainDB.js');

class FeelBackManager {
    constructor(){
        this.tableName = "FeedBack";
        this.createTable();

    }

    createTable(){
        connection.query("CREATE TABLE IF NOT EXISTS `"+this.tableName+"` ( `ID` INT NOT NULL AUTO_INCREMENT , `name` TEXT NOT NULL , `email` TEXT NOT NULL , `message` TEXT NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci", (err, rs) => {
            if(err){
                return console.log(err);
            } 

            console.log("Create table: " + rs);
        })
    }

    newFeedBack(bundle, fn){
        connection.query("INSERT INTO "+this.tableName+" SET ?", bundle, (err, result) => {
            if(err) return fn('err');

            return fn("success");
        })
    }

    getFeedBackList(fn) {
        connection.query("SELECT * FROM "+this.tableName+"", (err, result) => {
            if(err) return fn("err");

            return fn(result)
        })
    }

    deleteFeedBack(name, fn){
        connection.query("DELETE FROM "+this.tableName+" WHERE name = ?", [name], (err, result) => {
            if(err) return fn("error");

            return fn("success");
        })
    }

    dropTable(fn){
        connection.query("DROP TABLE "+this.tableName+"", err => {
            if(err) console.log(err);

            fn("Drop table succsess!");
        })
    }
}

module.exports = new FeelBackManager();