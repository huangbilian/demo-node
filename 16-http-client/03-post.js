#!/usr/bin/node
const http = require('http'),
      url  = require('url'),
      addr = 'http://localhost:8080',
      log  = console.log;
                        
var msg = process.argv[2] || 'Hello! I am wangding.';
                        
var options = url.parse(addr);
options.method = 'POST';
                        
var req = http.request(options, (res) => {
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  log(res.headers);
  log('');

  res.pipe(process.stdout);

});

req.end(msg + '\n');

