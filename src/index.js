
exports.min = function min (array) {
  if (array == null  || array.length == 0) return 0;
  
  let number =  Math.min(...array);
   return number;
}

exports.max = function max (array) {
  if (array == null  || array.length == 0) return 0;
  let number =  Math.max(...array);
   return number;
}

exports.avg = function avg (array) {
if (array == null  || array.length == 0) return 0;

 let sum = array.reduce((acc, el) => 
    acc+el,0);
    return sum/array.length;
}
