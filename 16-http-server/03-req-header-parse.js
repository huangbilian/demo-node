#!/usr/bin/node
const http=require('http'),
      log=console.log;
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('Host:',req.headers.host);//对象的方式解析
  //变量名中间不能有横线
  log('User-Agent:', req.headers['user-agent']);//数组的方式解析
  log('Content-Type:', req.headers['content-type']);

  /*log('authorization:',req.headers.authorization);
  if(typeof auth !== 'undefined'){
    auth = auth.split(' ');
    if(auth[0]==='Basic'){
      var buf = new Buffer(auth[1],'base64');
      log('username & password:',buf.toString('uft8'));
    }
  }*/
  req.pipe(process.stdout);
  res.end('OK!');
}).listen(8080);

