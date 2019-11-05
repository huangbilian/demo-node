#!/usr/bin/node
const http=require('http'),
      qs=require('querystring'),
      log=console.log,
      mysql = require('mysql'),
      con   = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'HBL111410',
        database: 'test'
              
      });
con.connect();
var items = '';
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  if(req.method==='GET' && req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.end(getHTML());
  }else if(req.method==='POST' && req.url==='/'){
    //submit data
    var it ='';
    req.on('data',(data)=>{
      it+=data;
    });

    req.on('end',()=>{
      if(typeof it !== 'undefined'){
        items.push(qs.parse(it).item);                      
      }
      insert();
      res.end(getHTML());
    });
  }else{
    res.end('error');
  }
}).listen(8080);

function getHTML(){
  select();
  console.log('debug: items =',items);
  return '<!DOCTYPE html><html><head><title>Hello</title><head><body><h1>TODO List</h1><ul>'+items.map(function(it) {return '<li>' + it + '</li>';}).join('\n')+'</ul><form method="POST" action="/"><input type="text" name="item"><input type="submit" value="submit"></form></body></html>';
}

function select(){
  con.query('select * from todo', function(err, result, fields) {
    if(err) {
      console.error(err.message);
      process.exit(1);               
    }

    items = result;

  });
}

function insert(){
  con.query('insert into todo(item) values(?)',[item], function(err, result) {
    if(err) {
      console.error(err.message);
      process.exit(1);
                                
    }
    return 0;                  
  });
}

