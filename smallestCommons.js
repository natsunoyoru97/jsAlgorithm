function smallestCommons(arr) {
	arr.sort();
	var newArr = [];
	for (var i = arr[0]; i <= arr[1]; i++) {
		newArr.push(i);
	}
	function gcd(a, b) {
		return b === 0 ? a: gcd(b, a % b);
	}
	function lcm(a, b) {
		console.log(a, b);
		return (a * b) / gcd(a, b);
	}
	var multiple = newArr[0];
	newArr.forEach(function(n) {
		multiple = lcm(multiple, n);
	});
  return multiple;
}

smallestCommons([18,23]);
