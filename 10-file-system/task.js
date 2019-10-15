#!/usr/bin/node

const fs = require('fs'),
      s = process.argv[2],
      dir = process.argv[3];

try{
  switch(s){
    case 'list':
      var files=[];
      var file = fs.readdirSync(__dirname).filter(item => {
        return fs.statSync(item).isFile();
      });
      for(var i=0;i<file.length;i++){
        var obj=[];
        var obj={
          "fileName":file[i],
          "fileSize":fs.statSync(file[i]).size
        };
        files.push(obj);
      }
      console.log(files);
      break;
    case 'mkdir':
      if(typeof(dir) === 'undefined') {
        console.error('没有指定要创建的目录名称！');
        process.exit(1);
      }

      fs.mkdirSync(dir);
      break;
    default:
      console.log('命令行参数错误！');
  }
}catch(err){
  console.log(err.message);
  process.exit(1);
}

