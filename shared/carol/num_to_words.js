var num_to_words = function(number) {

    var a = ["zero","one","two",
             "three","four","five",
             "six","seven","eight","nine"];
                      
  var  b = number.toString(),
    length = b.length,
    words ="";

    for (var i=0; i<length; i++){
       // words =  words.concat(a[parseInt(b[i])]+ " ");
        words += a[parseInt(b[i])]+ " ";
    }
    return words;
};
console.log(num_to_words(1234));
