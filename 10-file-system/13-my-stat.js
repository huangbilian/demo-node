#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2] || __filename;
console.log(fs.statSync(src));

