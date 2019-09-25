#!/usr/bin/node

const cp = require('child_process');

cp.execFile('./02-child.js',[],(err,stdout,error)=>{
  if(err){
    console.error(error);
    //console.log(err.message);
    process.exit(1);
  }
  console.log(stdout);
});
