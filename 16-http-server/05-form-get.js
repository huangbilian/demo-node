#!/usr/bin/node
const http=require('http'),
      qs=require('querystring'),
      log=console.log,
      url=require('url');
var items = ['eat'];
http.createServer((req,res)=>{
  var path = url.parse(req.url).pathname;

  if(path != '/') {
    err(res);
    return;
              
  }


  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  add(req,res);
}).listen(8080);


function show(res){
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


  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(html));

  res.statusCode = 200;
  res.end(html);
}

/*if(req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Lenght': Buffer.byteLength(html,'utf8')
    });
    res.end(html);
  } 
  else {
    var it = qs.parse(url.parse(req.url).query);
    if(typeof it !== 'undefined'){
      items.push(it.item);
    }
    res.end(html);
  }
  res.end('ok!');*/
//}).listen(8080);
//

function add(req, res) {
  var value = qs.parse(url.parse(req.url).query).item;

  if(typeof value !== 'undefined') items.push(value);

  log(items);
  show(res);

}

function err(res) {
  var msg = 'Not found!';

  res.statusCode = 404;
  res.setHeader('Content-Length', msg.length);
  res.setHeader('Content-Type', 'text/plain');
  res.end(msg);

}


