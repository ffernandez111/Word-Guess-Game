var list_of_words = ["stop","affirm","conquest"]
var computer_Guess = list_of_words[Math.floor(Math.random() * list_of_words.length)];
var num_of_guesses = computer_Guess.length + 5;
var results = [];
var blankWord = []; 
console.log (computer_Guess);
for (var i = 0; i < computer_Guess.length; i++) {
    results[i] = " _ ";
    
}
    
    document.onkeyup = function(event) {
    // Determines which key was pressed.
    var user_Guess = event.key;
    
    for (var j = 0; j < computer_Guess.length; j++) {
        // Hit
        if (user_Guess === computer_Guess.charAt(j)) {
            results[j] = user_Guess;
            console.log (results);
            $("#blankWord").text(results);
        } else {
            // Miss
            console.log('Wrong letter:', user_Guess);
        }
    }












} 
