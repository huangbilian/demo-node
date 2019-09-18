#!/usr/bin/node

const stdin = process.stdin,
      stdout = process.stdout;

stdin.resume();

stdin.on('data', function(data) {
  stdout.write(data.toString('utf8').toUpperCase());

});
for(var c='a'.charCodeAt(0); c<='z'.charCodeAt(0); c++) {
  stdout.write(String.fromCharCode(c));
}

stdin.on('end', function() {
    stdout.end();
});


