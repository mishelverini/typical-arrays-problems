
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }
  return Math.min(...array);
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }
  let average = array.reduce(function(total, value){
    return total + value;
  }, 0);
  return average / array.length;
}
