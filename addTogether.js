function addTogether() {
	if (typeof arguments[0] !== 'number') {
		return undefined;
	}
	function add(x) {
  		return function(y) {
  			if (typeof y !== 'number') {
  				return undefined;
  			} else {
  			return x + y;
  			}
  		};
  	return add;
  	}
  	var sumTwoAnd = add(arguments[0]);
  	if (arguments[1]) {
  		if (typeof arguments[1] === 'number') {
  			return sumTwoAnd(arguments[1]);
  		} else {
  			return undefined;
  		}
  	} else {
  		return add(arguments[0]);
  	}
}
addTogether(2)([3]);
