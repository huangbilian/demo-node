#!/usr/bin/node

const http = require('http'),
      addr = 'http://www.sian.com/',
      //url  = require('url'),
      log  = console.log;

//var addr = process.argv[2] || 'http://www.sian.com/';

function get(addr){
  //log('abc');
  http.get(addr, (res) => {
    //print start line
    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    //print response header
    log(res.headers);
    log('');
    //print response body
    
    
    if(res.statusCode < 400 && res.statusCode >= 300) {
      get(res.headers.location);
    } else {
      res.pipe(process.stdout);
    }                
  });


}

get(addr);

