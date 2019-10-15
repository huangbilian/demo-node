#!/usr/bin/node
const http=require('http'),
      url=require('url'),
      qs=require('querystring'),
      log=console.log;
http.createServer((req,res)=>{
  log('request url:',req.url);
  //var addr = url.parse(req.url);
  var addr = url.parse('http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f');
  log('protocol:',addr.protocol);
  log('auth:',addr.auth);
  log('hostname:',addr.hostname);
  //log('passowrd:',passowrd);
  log('port:', addr.port);
  log('host', addr.host);
  log('path-name:',addr.pathname);
  log('path parse:',addr.pathname.split('/'));
  log('query string:',addr.query);
  log('qs parse:',qs.parse(addr.query));
  log('hash:',addr.hash);

  res.end('OK!');
}).listen(8080);

