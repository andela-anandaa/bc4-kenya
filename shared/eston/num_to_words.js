/**
 * Created by MWAURA on 13-Nov-15.
 */
function num_to_words(number){
    var numWords=['zero','one','two','three','four','five','six','seven','eight','nine'];
    number=number.toString();
    var numString='';
    for(var i=0;i<number.length;i++){
        numString+=' '+numWords[parseInt(number[i])];
    }
    return numString;
}

console.log(num_to_words(45547647674));