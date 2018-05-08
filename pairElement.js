function pairElement(str) {
	var arr = str.split('');
	var map = {
		'A': 'T',
		'T': 'A',
		'C': 'G',
		'G': 'C'
	};
	for (var i = 0; i < arr.length; i++) {
		arr[i] = new Array(arr[i]);
		for (var j = 0; j < Object.keys(map).length; j++) {
				if (Object.keys(map)[j] == arr[i]) {
				arr[i].push(Object.values(map)[j]);
			}
		}
	}
	console.log(Object.keys(map));
  return arr;
}

var result = pairElement("GCG");
console.log(result);