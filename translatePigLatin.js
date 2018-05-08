function translatePigLatin(str) {
  var content = "";
               if(/[AEIOU]|[aeiou]/.test(str.charAt(0))) {
                   return str.concat('way');
               } else if (/[HMLT]|[hmlt]/.test(str.charAt(1))) {
                    content = str.slice(0, 2);
                    return str.slice(2).concat(content + 'ay');
                          } else {
                              console.log(/([AEIOU] | [aeiou])/.test(str));
                              content = str.charAt(0);
                              return str.slice(1).concat(content + 'ay');
                          }
}

translatePigLatin("consonant");