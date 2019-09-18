#!/usr/bin/node

var wd = {
  'name':'王顶',
  'QQ':'408542507',

  'Age':43
};

const log = console.log;
log('name: %s\t Age:%d',wd.name,wd.Age);//字符串类型  整数类型
log('JSON:%j',wd);//对象类型

log('name:%s',wd.name);//输出方式1：占位符输出
log('name:',wd.Name);//输出方式2：逗号间隔，多变量输出
log('name:'+wd.name);//输出方式3：拼接字符串输出
log('Name is ${wd.name}');//输出方式4：模板字符串输出

console.error('Error');

