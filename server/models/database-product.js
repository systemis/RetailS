const connection = require('../config/mainDB.js');
const tableName  = "ProductData";

function ProductDataManager() {
    this.createTable = (fn) => {
        connection.query("CREATE TABLE IF NOT EXISTS `"+tableName+"` ( `id` INT NOT NULL , `name` VARCHAR(200) NOT NULL , `category` TEXT NULL , `description` TEXT NOT NULL , `price` TEXT NOT NULL , `weight` TEXT NULL , `height` TEXT NULL , `material` TEXT NULL , `tags` TEXT NULL , `reviews` TEXT NOT NULL , `status` INT(200) NULL , PRIMARY KEY (`name`))", (err, result) => {
            if(err) {
                console.log(err);
                return fn('Error');
            }

            console.log(result);
            return fn("Success");
        })
    }

    this.newProduct = (bundle, fn) => {
        connection.query("INSERT INTO "+tableName+" SET ?", bundle, (err, result) => {
            if(err) {
                return fn("Error");
            }

            console.log(result);
            return fn("Success.");
        })
    }

    this.getProductByName = (name, fn) => {
        connection.query("SELECT * FROM "+tableName+" WHERE name = ?", [name], (err, result) => {
            if(err) { return fn("Error"); }
            if(result.length <= 0) { return fn("Not products")};
            
            console.log(result)
            return fn(result);
        })
    }

    this.getProductByCategory = (category, fn) => {
        connection.query("SELECT * FROM "+tableName+" WHERE category = ?", [category], (err, result) => {
            if(err) {
                return fn("Error");
            }

            console.log(result)
            return fn(result);
        })
    }

    this.getProductByTag     = (tag, fn) => {
        connection.query("SELECT * FROM "+tableName+"", (err, result) => {
            if(err) { return fn("Error"); }
            if(result.length < 0) { return fn("Not products in server .")};

            var products = [];
            for(var i = 0; i < result.length; i++) {
                if(result[i].tags.indexOf(tag) >= 0) {
                    products.push(result[i]);
                }
            }

            console.log(result)
            if(products.length < 0){
                return fn("Not products by tags in server ");
            }else{
                return fn(products);
            }
        })
    }

    this.updateProduct = (bundle, fn) => {
        connection.query("UPDATE "+tableName+"name = ?, category = ?, description = ?, price = ?, weight = ?, height = ?, material = ?, tags = ?, status = ? WHERE id = ?", [bundle.name, bundle.category, bundle.description, bundle.price, bundle.weight, bundle.height, bundle.material, bundle.tags, bundle.status, bundle.id], (err, result) => {
            if(err) return fn("Error");

            console.log(result);
            return fn("Success!");
        })
    }

    this.deleteProductByName = (name, fn) => {
        connection.query("DELETE FROM "+tableName+" WHERE name = ?", [name], (err, result) => {
            if(err) return fn("Error");

            return fn("Success.");
        })
    }
}

module.exports = new ProductDataManager();