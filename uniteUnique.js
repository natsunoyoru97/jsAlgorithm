function uniteUnique(arr) {
	var temp = arguments[0];
	for (var i = 0; i < arguments.length - 1; i++) {
		temp = temp.concat(arguments[i + 1]);
  	}
  	var args = Array.from(arguments);
  	var newArr;
  	for (var j = 0; j < args.length; j++) {
  		newArr = temp.filter(function(elem) {
  			return !args[j].includes(elem);
  		});
  		return args[0].concat(newArr);
  	}
}
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
