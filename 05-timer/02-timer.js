#!/usr/bin/node

console.log('start...');
//设置计数器
/*const timeID = setInterval(loop,500);
timeID.unref();

function loop() {
  console.log('I will loop forever!');
}*/
//设置总时长
setTimeout(() => {
  console.log('Game Over!');
}, 5000);


