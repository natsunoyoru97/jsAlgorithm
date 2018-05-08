function sumPrimes(num) {
	var set = new Set();
	for (var i = 2; i <= num; i++) {
		set.add(i);
		for (var j = 2; j < i; j++) {
			if(i % j === 0) {
				set.delete(i);
			}
		}
	}
	var arr = [...set];
  return arr.reduce((prev, curr) => prev + curr);
}

sumPrimes(10000);
