#!/usr/bin/node
const http=require('http'),
      qs=require('querystring'),
      log=console.log,
      url=require('url');
var items = ['eat'];
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  var html = ''
    +'<!DOCTYPE html>\n'
    + '<html>\n'
      + '<head>\n'
       + '<meta charset="UTF-8">\n'
       + '<title>Todo list</title>\n'
      + '</head>\n'
      + '<body>\n'
       + '<h1>Todo List</h1>\n'
       + '<ul>\n'
        + items.map(function(item) {return '      <li>' + item + '</li>';}).join('\n')
       + '</ul>\n'
       + '<form method="get" action="/">\n'
        + '<p><input type="text" name="item" />'
        + '<input type="submit" value="Add Item" /></p>\n'
       + '</form>\n'
      + '</body>\n'
    + '</html>';
  
  if(req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Lenght': Buffer.byteLength(html,'utf8')
    });
    res.end(html);
  } 
  else {
    var it = qs.parse(url.parse(req.url).query);
    if(typeof it !== 'undefined'){
      items.push(it);
    }
    res.end(html);
  }
  res.end('ok!');
}).listen(8080);

