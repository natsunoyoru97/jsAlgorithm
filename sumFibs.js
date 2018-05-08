function sumFibs(num) {
    var arr = [];
    var prev = 0;
    var curr = 1;
    var sum = 1;
    while (sum <= num){
    	curr = sum;
    	sum = prev + curr;
    	prev = curr;
    	if (curr % 2 !== 0) {
    		arr.push(curr);
    	}
    }
    return arr.reduce(function (former, later) {
    	return former + later;
    });
}

var result = sumFibs(75025);
console.log(result);