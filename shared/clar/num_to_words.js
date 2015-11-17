
function num_to_words(num) {
var a = ["zero", "one", "two", "three", "four", "five"],
    s = num.toString(),
    length = s.length,
    words = " ";

for(var i=0; i<length; i++) {
  words = words.concat(a[parseInt(s[i])]) + " "; 
}

return words;
    
}
console.log(num_to_words(2004));
