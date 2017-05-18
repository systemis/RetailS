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

app.set('port', (process.env.PORT || 5000));
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(cookieParser());
app.use(expresssession( {
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false
} ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '.', 'build')));


// Routers 
require('./server/app/home.js')(app);
require('./server/app/user.js')(app);
require('./server/app/product.js')(app);
require('./server/app/image.js')(app);
require('./server/app/shop.js')(app);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`App listening on port ${PORT}!`)
  //productDM.plusSell("giay cua thinh", result => console.log("Plus sell of: " + "giay cua thinh " + " result: " + result))
  //var date = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
  // productDM.createTable(_result => console.log(_result));
});
