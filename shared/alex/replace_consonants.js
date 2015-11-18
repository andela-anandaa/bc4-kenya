//
function consonante (arg) {
    arg.toString();
    return arg.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "i");
}
    
console.log(consonante("bootcamp"));

function consonante2(arg) {
    arg.toLowerCase();
    var consonants = "bcdfghjklmnpqrstvwxyz";
    var con_len = consonants.length, len = arg.length,ans = [], result = " ";
    for (var i = 0; i < len; i++) {
        ans[i] = arg[i];
        for (var j = 0; j < con_len; j++) {
            //ans[i] = arg[i];
            if (arg[i] === consonants[j]) {
                ans[i] = "i"; 
          } 
    } 
  result += ans[i];
} 
console.log(result)
}

consonante2("Bbootcamp");