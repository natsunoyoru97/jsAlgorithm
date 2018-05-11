function steamrollArray(arr) {
  // RECURSION!!
  return arr.reduce(function (prev, curr) {
  	return prev.concat(Array.isArray(curr) ? steamrollArray(curr) : curr);
  }, []);;
}

steamrollArray([1, [], [3, [[4]]]]);
