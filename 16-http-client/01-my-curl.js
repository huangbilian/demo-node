#!/usr/bin/node

const http = require('http'),
      addr = process.argv[2] || 'http://v.juhe.cn/weather/index?cityname=石家庄&key=70b20823f67b5f0ca3358b796fd83260';
http.get(addr,function(res){
  //print start line
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //print response header
  console.log(res.headers);
  console.log('');
  //print response body
  res.pipe(process.stdout);
});

