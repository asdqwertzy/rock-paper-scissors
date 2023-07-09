function getComputerChoice() {
    choices = ["rock", "paper", "scissors"]
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(choice) {
    var comp = getComputerChoice()
    if (choice === comp) {
        
    } else if (
        (choice === "rock" && comp === "scissors") ||
        (choice === "paper" && comp === "rock") ||
        (choice === "scissors" && comp === "paper")
    ) {
        human++;
        humanscore.textContent = "You: " + human;
    } else {
        pc++;
        pcscore.textContent = "Computer: " + pc;
    }
    if (human >= 5) {
        scoremsg.textContent = "You win!"
        pc = 0
        human = 0
        started = 0
        scoreboard.forEach(scoreboard => { scoreboard.style.visibility = "hidden" })
        buttons[0].style.visibility = "visible"
    }
    else if (pc >= 5) {
        scoremsg.textContent = "You lose!"
        pc = 0
        human = 0
        started = 0
        scoreboard.forEach(scoreboard => { scoreboard.style.visibility = "hidden" })
        buttons[0].style.visibility = "visible"
    }
}



var started = 0;
var human = 0;
var pc = 0;

var scoremsg = document.querySelector('#score')
var humanscore = document.querySelector('.humanscore')
var pcscore = document.querySelector('.pcscore')

var buttons = document.querySelectorAll("button")
var scoreboard = document.querySelectorAll('.score')

if (buttons) {
    for (var button of buttons) {
        button.addEventListener('click', function (e) {
            console.log(this.className)
            if (this.className == "start" && started == 0) {
                started = 1;
                this.style.visibility = "hidden"
                scoreboard.forEach(scoreboard => { scoreboard.style.visibility = "visible" })

            }
            if (started == 1) {
                switch (this.className) {
                    case "rock":
                        play("rock");
                        break;
                    case "paper":
                        play("paper");
                        break;
                    case "scissors":
                        play("scissors");
                        break;
                    default:
                        break;
                }
            }
        })
    };
}

