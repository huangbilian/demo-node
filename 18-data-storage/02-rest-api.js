#!/usr/bin/node
const http=require('http'),
      fs=require('fs'),
      log=console.log;
//var items =[];
var items = loadData();
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  //log('request method:',req.method);
  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'PUT':
      update(req, res);
      break;
    case 'POST':
      insert(req, res);
      break;
    case 'DELETE':
      remove(req, res);
      break;
    default:
      res.end('Something Wroing');
  }
  res.end('hello world');
}).listen(8080);

function select(req, res) {
  var data = JSON.stringify(items);
  res.setHeader('Content-length',Buffer.byteLength(data));
  res.setHeader('Content-Type','text/plain;charset="utf8"');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.end(data);
}

function insert(req, res) {
  var item='';
  req.on('data',(data)=>{item+=data;});
  req.on('end',()=>{
    if(typeof item !== 'undefined'){
      items.push(item);
      res.end('Insert ok');
    }else{
      res.end('Insert Error');
    }
  });
}

function update(req, res) {
  //parse url get id,validate id,type and range
  //parse req get content
  //modify items[id] = new content
  var arg = req.url.split('/');
  if(arg[1] === '') {
    items = [];
          
  }

  var item = '';
  res.setHeader('Access-Control-Allow-Origin', '*');
  req.on('data', (chunk) => { item += chunk;  });
  req.on('end', () => {
    var i = parseInt(arg[1]);

    if(!items[i]) {
      res.statusCode = 404;
      res.end('Not found');                                
    } else {
      items[i] = item;
      res.statusCode = 200;
      res.end('update OK');
                                      
    }
                
  });
}

function remove(req, res) {
  var id = req.url.slice(1,req.url.length);
  items.splice(id,1);
  res.end('Delete ok!');
}

function err(res){
  res.end('Something wrong');
}

function loadData(){
  try{
    var data = fs.readFileSync('./todo-list.txt','utf8');
    return JSON.parse(data);
  }catch(e){
    return [];
  }
}

process.on('SIGINT',()=>{
  fs.writeFileSync('./todo-list.txt',JSON.stringify(items));
  process.exit();
});
