const connection = require('../config/mainDB.js');
const tableName  = "ProductData";

class ProductDataManager{
    constructor(){
        connection.query("CREATE TABLE IF NOT EXISTS `"+tableName+"` ( `id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(200) NOT NULL , `image` TEXT NOT NULL , `category` TEXT NOT NULL , `description` TEXT NOT NULL , `price` TEXT NOT NULL , `weight` TEXT NULL , `height` TEXT NULL , `material` TEXT NULL, `reviews` TEXT NOT NULL , `status` TEXT(200) NULL, `sell` INT NULL, `date` TEXT NOT NULL, PRIMARY KEY (`id`)) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci", (err, result) => {
            if(err) {
                console.log(err);
            }

            console.log(result);
        })
    }

    newProduct(bundle, fn){
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

    getProductByName(name, fn){
        connection.query("SELECT * FROM "+tableName+" WHERE name = ?", [name], (err, result) => {
            if(err) { return fn("Error"); }
            if(result.length <= 0) { return fn("Not products")};
            
            result[0].reviews = JSON.parse(result[0].reviews);
            return fn(result[0]);
        })
    }

    getProductsByCategory(category, fn){
        connection.query("SELECT * FROM "+tableName+" WHERE category = ?", [category], (err, result) => {
            if(err) {
                return fn("Error");
            }

            console.log(result)
            return fn(result);
        })
    }

    updateProduct(bundle, fn){
        connection.query("UPDATE "+tableName+" SET name = ?, image = ?, category = ?, description = ?, price = ?, weight = ?, height = ?, reviews = ?, material = ?, status = ? WHERE id = ?", [bundle.name, bundle.image, bundle.category, bundle.description, bundle.price, bundle.weight, bundle.height, JSON.stringify(bundle.reviews), bundle.material, bundle.status, bundle.id], (err, result) => {
            if(err) {
                return fn("Error");
            }

            console.log(result);
            return fn("Success!");
        })
    }

    plusSell(name, fn){
        connection.query("SELECT * FROM "+tableName+" WHERE name = ?", [name], (_err, _result) => {
            if(_err) throw _err;

            var newSell = _result[0].sell + 1;
            connection.query("UPDATE " + tableName + " SET sell = ? WHERE name = ?", [newSell, name], (err, result) => {
                if(err) throw err;

                fn(result);
            });
        })
    }

    deleteProductByName(name, fn){
        connection.query("DELETE FROM "+tableName+" WHERE name = ?", [name], (err, result) => {
            if(err) return fn("Error");

            return fn("Success.");
        })
    }

    dropTable(fn){
        connection.query("DROP TABLE "+tableName+"", err => {
            if(err) console.log(err);

            fn("Drop table succsess!");
        })
    }

    getProducsList(fn){
        connection.query("Select * from "+tableName+"", (err, result) => {
            if(err) { console.log(err); return fn(err, null) }
            if(result.length < 0) return fn("Not data", null);
            
            return fn(null, result);
        })
    }

    checkIsExistsByName(name, fn){
        connection.query("SELECT * FROM " + tableName + "", (err, result) => {
            if(err) console.log(err);

            for(var i = 0; i < result.length; i++) {
                if(result[i].name === name) {
                    return fn(false);
                }
            }

            return fn(true);
        })
    }
}   


module.exports = new ProductDataManager();