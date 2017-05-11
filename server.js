// server/app.js
const express         = require('express');
const morgan          = require('morgan');
const path            = require('path');
const bodyParser      = require("body-parser");
const cookieParser    = require("cookie-parser");
const expresssession  = require("express-session");
const userDM          = require('./server/models/database-user.js');

const productDM          = require('./server/models/database-product.js');

const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(cookieParser());
app.use(expresssession( {
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false
} ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '.', 'build')));


require('./server/app/home.js')(app);
require('./server/app/user.js')(app);
require('./server/app/product.js')(app);
require('./server/app/image.js')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
  
  //productDM.createTable((result) => console.log(result));
  // var bundle = {
  //   id: Date.now(),
  //   name: "fdndsis", 
  //   category: "",
  //   description: "dd",
  //   price: "d",
  //   weight: "2sd",
  //   height: "",
  //   material: "",
  //   //tags: "",
  //   reviews: "",
  //   status: ""
  // }

  // productDM.newProduct(bundle, (result) => console.log(result));

  // productDM.getProductByName("fdnsis", (result) => {
  //   console.log(result);
  // })
  // productDM.deleteProductByName("fdnsis", (result) => {
  //   console.log(result);
  // })

  // productDM.dropTable(result => {
  //   console.log(result);
  //   if(result) {
  //     productDM.createTable(rs => {
  //       console.log("Create table: " + rs);
  //     });
  //   }
  // // })

  // productDM.getProductByName("Quần jean từ Nhật Bản.", result => console.log(result));
});
