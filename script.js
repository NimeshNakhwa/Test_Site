document.addEventListener('DOMContentLoaded', function startGame(level) {
    var n = 73;
    var attempts;
    switch(level) {
        case 1:
            attempts = 15;
            break;
        case 2:
            attempts = 10;
            break;
        case 3:
            attempts = 5;
            break;
        default:
            attempts = 0;
    }
    if (attempts > 0) {
        var output = document.getElementById('output');
        output.innerHTML = `Level ${level}: You have ${attempts} attempts.<br>`;
        for (var i = 0; i < attempts; i++) {
            var guess = Number(prompt("Guess the Number (0 to 100):"));
            if (!isNaN(guess) && guess >= 0 && guess <= 100) {
                if (guess > n) {
                    output.innerHTML += `Jackpot is Smaller than ${guess}<br>`;
                } else if (guess < n) {
                    output.innerHTML += `Jackpot is Greater than ${guess}<br>`;
                } else if (guess === n) {
                    output.innerHTML += "YOU WON THE JACKPOT!!!<br>";
                    break;
                }
            } else {
                output.innerHTML += "Invalid Input.<br>";
            }
        }
    } else {
        alert("Invalid level selected.");
    }
}
);


