var express = require('express');
var app = express();
var route = require('./routes/route')

app.use('/',route);

app.listen(5000);