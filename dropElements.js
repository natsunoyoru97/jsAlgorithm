function dropElements(arr, func) {
  // Drop them elements.
  if (arr.filter(func)[0]) {
  	return arr.slice(arr.indexOf(arr.filter(func)[0]));
  } else {
  	return [];
  }
}

var result = dropElements([1, 2, 3, 4], function(n) {return n > 5;})
console.log(result);