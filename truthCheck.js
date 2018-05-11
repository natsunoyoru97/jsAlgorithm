function truthCheck(collection, pre) {
  // Is everyone being true?
  for(let value of collection) {
  	if (!value[pre]) {
  		return false;
  	}
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
