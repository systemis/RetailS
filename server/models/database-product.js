const connection = require('../config/mainDB.js');
const tableName  = "ProductData";

function ProductDataManager() {
    this.createTable = (fn) => {
        connection.query("CREATE TABLE IF NOT EXISTS `"+tableName+"` ( `id` INT NOT NULL , `name` VARCHAR(200) NOT NULL , `image` TEXT NOT NULL , `category` TEXT NOT NULL , `description` TEXT NOT NULL , `price` TEXT NOT NULL , `weight` TEXT NULL , `height` TEXT NULL , `material` TEXT NULL, `reviews` TEXT NOT NULL , `status` TEXT(200) NULL, `sell` INT NULL, PRIMARY KEY (`name`))", (err, result) => {
            if(err) {
                console.log(err);
                return fn('err');
            }

            console.log(result);
            return fn("Success");
        })
    }

    this.newProduct = (bundle, fn) => {
        if(this.checkIsExistsByName(bundle.name, result => {
            if(result){
                connection.query("INSERT INTO "+tableName+" SET ?", bundle, (err, result, field) => {
                    if(err) {
                        console.log(err);
                        return fn("Error");
                    }

                    console.log(result);
                    return fn("success");
                })
            }else{
                fn("exists");
            }
        }));
    }

    this.getProductByName = (name, fn) => {
        connection.query("SELECT * FROM "+tableName+" WHERE name = ?", [name], (err, result) => {
            if(err) { return fn("Error"); }
            if(result.length <= 0) { return fn("Not products")};
            
            console.log(result)
            return fn(result[0]);
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

    this.updateProduct = (bundle, fn) => {
        connection.query("UPDATE "+tableName+" SET name = ?, image = ?, category = ?, description = ?, price = ?, weight = ?, height = ?, material = ?, status = ? WHERE id = ?", [bundle.name, bundle.image, bundle.category, bundle.description, bundle.price, bundle.weight, bundle.height, bundle.material, bundle.status, bundle.id], (err, result) => {
            if(err) {
                return fn("Error");
            }

            console.log(result);
            return fn("Success!");
        })
    }

    this.plusSell = (name, fn) => {
        connection.query("SELECT * FROM "+tableName+" WHERE name = ?", [name], (err, result) => {
            if(err) throw err;

            var newSell = result[0].sell + 1;
            connection.query("UPDATE " + tablename + " SET sell = ? WHERE name = ?", [sell, name], (_err, result) => {
                if(_err) throw _err;

                fn(result);
            });
        })
    }

    this.deleteProductByName = (name, fn) => {
        connection.query("DELETE FROM "+tableName+" WHERE name = ?", [name], (err, result) => {
            if(err) return fn("Error");

            return fn("Success.");
        })
    }

    this.checkIsExistsByName = (name, fn) => {
        connection.query("SELECT * FROM " + tableName + "", (err, result) => {
            if(err) throw err;

            for(var i = 0; i < result.length; i++) {
                if(result[i].name === name) {
                    return fn(false);
                }
            }

            return fn(true);
        })
    }

    this.dropTable = fn => {
        connection.query("DROP TABLE "+tableName+"", err => {
            if(err) throw err;

            fn("Drop table succsess!");
        })
    }

    this.getProducsList = fn => {
        connection.query("Select * from ProductData", (err, result) => {
            if(err) throw err;

            return fn(result);
        })
    }
}   


module.exports = new ProductDataManager();