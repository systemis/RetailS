// server/app.js
'use strict';

const express         = require('express');
const morgan          = require('morgan');
const path            = require('path');
const bodyParser      = require("body-parser");
const cookieParser    = require("cookie-parser");
const expresssession  = require("express-session");
const userDM          = require('./server/models/database-user.js');
const productDM       = require('./server/models/database-product.js');
const feedbackDM      = require('./server/models/database-feedback.js');

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


app.get('/about-us', (req, res) => {
  res.sendFile(path.resolve(__dirname, "." ,"build/index.html"));
})

// Routers 
require('./server/app/home.js')(app);
require('./server/app/user.js')(app);
require('./server/app/product.js')(app);
require('./server/app/image.js')(app);
require('./server/app/shop.js')(app);
require('./server/app/feedback.js')(app);

const PORT = process.env.PORT || 3000;
const Xinchao = "Thinh"
app.listen(process.env.PORT || 9288, () => {
  console.log(`App listening on port ${PORT}!`)

  // userDM   .dropTable(rs => userDM   .createTable(_rs => console.log(_rs)));
  // productDM.dropTable(rs => productDM.createTable(_rs => console.log(_rs)));
  // userDM    .dropTable(rs => {});
  // productDM .dropTable(rs => {});
  // feedbackDM.dropTable(rs => {})
  console.log(`dn ${Xinchao}`);

});
