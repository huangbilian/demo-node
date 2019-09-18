#!/usr/bin/node

module.exports.area = function area(radius){
  return Math.PI*radius*radius;
          
};
module.exports.circumference = function circumference(radius){
  return 2*Math.PI*radius;          
};
module.exports.diameter = function diameter(radius){
  return 2*radius;          
}
console.dir(module);

