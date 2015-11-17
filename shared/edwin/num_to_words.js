var words = ["Zero",
            "One",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine"];
var num_to_words = function (num){
    var str_num = num.toString();
    var num_in_words = "";
    len = str_num.length;
    for (var i = 0; i < len; i++){
       num_in_words = num_in_words.concat(words[parseInt(str_num[i])], " ");
    // num_in_words += words[parseInt(str_num[i])]+" ";
    }
    return num_in_words;
}
console.log(num_to_words(2344));