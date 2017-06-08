module.exports = router => {
    const path            = require('path');
    const fs              = require('fs');
    const multer          = require('multer');
    const imgurUploader   = require('imgur-uploader');
    const productDM       = require('../models/database-product.js');
    var filename          = '';
    var _filename         = '';

    
    // imgurUploader(fs.readFileSync('./server/public/upload/productimage/fwpANHL.jpg_.jpg'), {'title': 'dd'}).then(res => {
    //     console.log('Link: ' + res.link);
    // });

    const multerCustom = {
        destination: function(req, file, cb) {
            cb(null, path.resolve(__dirname, "../public/upload/productimage"));
        },
        filename: function(req, file, cb){
            var normalFileName = file.originalname.replace(" ", "") ;
            var uploadFileName = normalFileName + "_" + normalFileName.substr(normalFileName.indexOf('.'));

            filename  = "/public/upload/productimage/"   + uploadFileName;
            _filename = "./server/public/upload/productimage/" + uploadFileName;

            return cb(false, uploadFileName);
        }
    }


    var storage   = multer.diskStorage(multerCustom)
    var upload    = multer({storage: storage}).single('imagevalue');
    
    router.get("/product-by-name/:name",     (req, res) => res.sendfile(path.resolve(__dirname, "../../", "build/index.html")));
    // router.get("/product-by-name/:category", (req, res) => res.sendfile(path.resolve(__dirname, "../../", "build/index.html")));


    router.get("/all-product", (req, res) => {
        productDM.getProducsList(result =>{
            return res.json(result)
        })
    })


    router.get("/get-product-by-name/:name", (req, res) => {
        const productName = req.params.name;
        productDM.getProductByName(productName, result => {
            res.send(result);
        })
    })


    router.get("/get-besell-products", (req, res) => {
        productDM.getProducsList(result => {
            for(var i = 0; i < result.length; i++) {
                for(var j = 0; j < result.length; j ++) {
                    if(result[i].sell > result[j].sell) {
                        var _single_result = result[i];
                        result[i] = result[j];
                        result[j] = _single_result;
                    }
                }
            }

            var _result = [];
            for(var i = 0; i < result.length; i ++) {
                if(i < 4 && result[i]) _result.push(result[i]);
            }

            res.json(_result);
        })
    })

    router.get("/get-related-products", (req, res) => {
        productDM.getProducsList(result => {
            for(var i = 0; i < result.length; i++){
                for(var j = 0; j < result.length; j++){
                    if(Date.parse(result[i].date) > Date.parse(result[j].date)){
                        var _single_result = result[i];
                        result[i] = result[j];
                        result[j] = _single_result;
                    }
                }
            }

            res.send(result);
        })
    })

    router.get("/get-product/category/:category", (req, res) => {
        const category = req.params.category;
        console.log(category);
        productDM.getProductsByCategory(category, result => {
            if(result === "err") return res.send("Error !!");

            //console.log(result);
            res.send(result);
        })
    })


    router.post('/add-new-product', (req, res) => {
        if(req.isAuthenticated()) {
            if(req.user.email === 'systemofpeter@gmail.com'){
                upload(req, res, err => {
                    if(err){
                        return console.log("Error when upload image " + err);
                    }
                    setTimeout(() => {
                        imgurUploader(fs.readFileSync(_filename), {title: 'product-image'}).then(data => {
                            fs.unlink(_filename);
                            console.log(`image link: ${data.link}`);
                            console.log(Date.now());
                            var productBundle     = req.body;
                            // productBundle.id    = Date.now();
                            productBundle.date    = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
                            productBundle.sell    = 0;
                            productBundle.name    = removeWordFromLastPosition(" ", productBundle.name);
                            productBundle.name    = removeWordFromLastPosition(".", productBundle.name);
                            productBundle.reviews = JSON.stringify([]);
                            
                            if(filename) { productBundle.image = data.link; }

                            // Bỏ ký tử '.' khỏi chuỗi nếu ở ký tự ở cuối chuỗi;                    
                            productDM.newProduct(req.body, result => {
                                if(result === "err")     return res.send("Have error when handling value in server"); 
                                if(result === "exists")  return res.send("Value is already exists in server ");;
                                if(result === 'success') {
                                    console.log(result)
                                    console.log("Admin have just added new product: ")
                                    console.log(req.body);
                                    return res.redirect('/');
                                }
                            });
                        })
                    }, 2000);
                })
            }else{
                return res.send("Not admin");
            }
        }else{
            return res.send("Not login");        
        }
    })

    router.post("/plus-product-sell/:name", (req, res) => {
        const productName = req.params.name;
        console.log("Có người đang xem sản phẩm: " + productName);
        
        productDM.plusSell(productName, result => console.log("Plus sell of: " + productName + " result: " + result));
    })


    router.post('/update-product', (req, res) => {
        productDM.updateProduct(req.body.data, (result) => {
            return console.log(result);
        })
    })

    function removeWordFromLastPosition(word, text){
        var chA = text.split("");
        console.log(chA);
        if(chA[chA.length - 1] === word){
            delete chA[chA.length - 1];
        }

        return chA.join("");
    }
}