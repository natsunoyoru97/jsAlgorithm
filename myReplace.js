function myReplace(str, before, after) {
  var arr = str.split(" ");
    for (i = 0; i < arr.length; i++) {
      if(arr[i] === before) {
        if(before.charAt(0).match(/[A-Z]/)) {
          after = after.charAt(0).toUpperCase() + after.substr(1);
        }
        arr[i] = after;
      }
    }
  str = arr.join(" ");
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
