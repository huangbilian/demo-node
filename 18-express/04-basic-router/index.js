const express = require('express');
const app = express();

function r3(req, res, next) {
  console.log('r3');
  next();
}

function r4(req, res, next) {
  console.log('r4');
  next();
}

app.get('/', [r3, r4], function(req, res, next) {
  console.log('r1');
  next();
}, function(req, res) {
  console.log('r2');
  res.end('ok!');
});

app.get('/json', function(req, res) {
  res.json({name: 'wangding', age: 41});
  res.end();

});

app.get('/download', function(req, res) {
  res.download('package.json');
});

app.get('/courses/:id', function(req, res) {
  console.log('id:', req.params.id);
  res.send('ok!');

});

app.get('/posts/:year/:month', function(req, res) {
  console.log('year:', req.params.year);
  console.log('month:', req.params.month);
  res.send('ok!');
});

app.listen(8080);

