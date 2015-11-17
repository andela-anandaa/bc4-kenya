var num_to_words = function(num){
 var s = num.toString();
 var length = s.length;
 var words = " ";
 var a= ["Zero","One", "Two", "Three", "Four", "Five"];
 
 for(var i = 0; i < length; i++){
 
 words += a[parseInt(s[i])] + " ";
 
}
return words;
}

console.log(num_to_words(2005));