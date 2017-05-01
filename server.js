// server/app.js
const express         = require('express');
const path            = require('path');
const bodyParser      = require("body-parser");
const cookieParser    = require("cookie-parser");
const expresssession  = require("express-session");
const userDM          = require('./server/models/database-user.js');

const app = express();

app.use(cookieParser());
app.use(expresssession( {
    secret: process.env.SESSION_SECRET || 'secret', 
    resave: false,
    saveUninitialized: false
} ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '.', 'build')));

require('./server/app/user.js')(app);
require('./server/app/home.js')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
});