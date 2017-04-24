// server/app.js
const express = require('express');
const morgan  = require('morgan');
const path    = require('path');

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '.', 'build')));
app.use(require('./server/app/home.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
});