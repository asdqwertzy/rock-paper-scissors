function getComputerChoice() {
    choices = ["rock", "paper", "scissors" ]
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


