function getComputerChoice() {
    choices = ["rock", "paper", "scissors" ]
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function start(choice) {
    const pc = getComputerChoice();
    const human = choice.toLowerCase();
    const outcomes = {
        rock: {
            rock: "Tie! Both chose Rock.",
            paper: "You win! Paper beats Rock!",
            scissors: "You lose! Rock beats Scissors!"
        },
        paper: {
            rock: "You lose! Paper beats Rock!",
            paper: "Tie! Both chose Paper.",
            scissors: "You win! Scissors beats Paper!"
        },
        scissors: {
            rock: "You win! Rock beats Scissors!",
            paper: "You lose! Scissors beats Paper!",
            scissors: "Tie! Both chose Scissors."
        }
    };
    return outcomes[pc][human];
}

function game() {
    var pc = 0, human = 0; 
    choices = ["rock", "paper", "scissors" ]
    for(i = 0; i < 5; i++)
    {
        choice = prompt("Please pick one: Rock, paper, or scissors.")
        if (!choices.includes(choice.toLowerCase())) {
            console.log("Invalid choice, try again.")
            continue;
        }
        else 
        {
            str = start(choice);
            if (str.includes("win")) { 
                human++;
                console.log(str)
                console.log(`${human}-${pc}`);
            }
            if (str.includes("lose")) { 
                pc++;
                console.log(str)
                console.log(`${human}-${pc}`);
            }
            if (str.includes("Tie")) {
                console.log(str)
                console.log(`${human}-${pc}`);
            }
        }
    }
    if (human > pc) { return(`Winner! ${human}-${pc}`); }
    else if (human < pc) { return(`Loser! ${human}-${pc}`); }
    else return (`Tie! ${human}-${pc}`);
}
