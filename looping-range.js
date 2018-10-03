function range(start, end, step) {
  var output = [];
  if (start < end && step > 0) {
    for(var i = start; i <= end; i += step) {
      output.push(i);
    }
    return output;
  } else {
    return output;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, 2, 0));