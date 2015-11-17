var num_in_words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
    ];

function numToWords(num){
    num = num.toString();
    var words = "";
    var length = num.length;

    for (var i = 0; i < length; i++){
        words += num_in_words[parseInt(num[i])] + " ";
    }

    return words;
}

console.log(numToWords(23984));