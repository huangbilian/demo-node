const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.end('hello express');
});

app.listen('8080');

