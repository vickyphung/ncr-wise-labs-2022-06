
// require the modules; create the Express app; and mount the morganlogging middleware and express.json()middleware that processes JSON data sent in the AJAX request and adds it to the req.body:
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');
// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'));
app.use(express.json());

app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
