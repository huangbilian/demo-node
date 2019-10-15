#!/usr/bin/node
const http=require('http');


http.createServer((req, res) =>{
  var html = 
  '<!DOCTYPE html><html><head><title>Hello</title><head><body><h1>Hello world!</h1></body></html>';

  if(req.url === '/'){
    //200 ok
    res.writeHead(200,{
      'Content-Type':'text/html',
      'Content-Length':Buffer.byteLength(html)
    });
    res.end(html);
  }else{
    //404 not found
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Resource not found!');
  }

}).listen(8080);

