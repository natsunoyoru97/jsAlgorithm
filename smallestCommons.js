function smallestCommons(arr) {
	//使传入的参数按升序排列并补全需要求最小公倍数的数列
	arr.sort();
	var newArr = [];
	for (var i = arr[0]; i <= arr[1]; i++) {
		newArr.push(i);
	}
	//用该function求出任意两个正整数的最大公因数
	function gcd(a, b) {
		return b === 0 ? a: gcd(b, a % b);
	}
	//用求得的最大公因数求这两个整数的最小公倍数
	function lcm(a, b) {
		console.log(a, b);
		return (a * b) / gcd(a, b);
	}
	//设置最小公倍数初始值，并遍历Array对象累乘得到最终结果
	var multiple = newArr[0];
	newArr.forEach(function(n) {
		multiple = lcm(multiple, n);
	});
  return multiple;
}


var result = smallestCommons([18,23]);
console.log(result);