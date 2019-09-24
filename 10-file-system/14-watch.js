#!/usr/bin/node

/*const fs = require('fs'),
      dst = process.argv[2];

fs.watch(dst.function(evt,file){
  console.log("%evt happend with file:%s",evt,file);
});*/


const fs = require('fs');

var w = fs.watch(__dirname, console.log);

process.on('SIGINT', () => {
  w.close();
  console.log('unwitch the directory');
  console.log('Game over after ten second...');

  setTimeout(() => {
    process.exit();
  }, 5000);
});

