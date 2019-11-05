const express = require('express');
const app = express();

//app.use(express.static(__dirname + '/public'));
//app.use(logger());

app.use(express.static('.'));
app.listen('8080');

