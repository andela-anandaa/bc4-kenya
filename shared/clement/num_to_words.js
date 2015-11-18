function num_to_words(num){
    var word = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var str = num.toString(),
    length = str.length,
    words = "";
    for(var i = 0; i<length; i++){
        words += word[parseInt(str[i])] + " ";
    }
    return words;
}

console.log(num_to_words(2005));
