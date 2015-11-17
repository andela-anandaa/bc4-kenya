var num_to_words = function (num) {
    
    var wordsForNumbers = ["Zero", "One", "Two", "Three", "Four", "Five", 
    "Six", "Seven", "Eight", "Nine", "Ten"];
    var str = num.toString();
    var length = str.length, words = " ";
    
    for (var i=0; i<length; i++) {
        //words += wordsForNumbers[str[i]] + " ";
        words = words.concat(wordsForNumbers[parseInt((str[i]))], " ");
    }
    return words;
}

console.log(num_to_words(2005));