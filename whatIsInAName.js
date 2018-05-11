function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var sourceKey = Object.keys(source);
  	console.log(sourceKey[0]);
  	var str0 = sourceKey[0].toString();
  	var sourceValue = Object.values(source)[0];
  	console.log(sourceValue);
  	for (let entry of collection) {
    		if(entry.hasOwnProperty(sourceKey[0])) {
  			if(entry[str0] == sourceValue) {
  				arr.push(entry);
  			}
  			if (sourceKey.length > 1) {
  				var str1 = sourceKey[1].toString();
  				if (!entry.hasOwnProperty(sourceKey[1]) && entry[str1] == sourceValue[1]) {
  				arr.pop(entry);
  				}
  			}
  		}
  	}
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })
