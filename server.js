const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('./app/routes')(app);

var connection = mongoose.connect("mongodb://admin:password@ds225078.mlab.com:25078/wyncodeinterview");

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;

