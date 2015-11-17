function num_to_words(numb) {

            var counter;
            var words = ["zero", "one", "two", "three", "four", "five", "six", "seven",
                "eight","nine"];
            for (counter in numb) {
                document.write(words[numb[counter]] + " ");
            }
        }
        num_to_words(prompt("Enter a number"));
