function getComputerChoice() {
    var choices = ["Rock", "Paper", "Scissors"]
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(choice) {
    var comp = getComputerChoice()
    if (choice === comp) {
        scoremsg.textContent = "Tie."
        document.querySelector(".info").textContent = `${comp} and ${choice}`;
    } else if (
        (choice === "Rock" && comp === "Scissors") ||
        (choice === "Paper" && comp === "Rock") ||
        (choice === "Scissors" && comp === "Paper")
    ) {
        human++;
        humanscore.textContent = "You: " + human;
        scoremsg.textContent = "You win the round."
        if (choice == "Scissors" && comp == "Paper") {
            document.querySelector(".info").textContent = `${choice} beat ${comp}`;
        }
        else {
            document.querySelector(".info").textContent = `${choice} beats ${comp}`;
        }
    } else {
        pc++;
        pcscore.textContent = "Computer: " + pc;
        scoremsg.textContent = "Computer wins the round."
        if (comp == "Scissors" && choice == "Paper") {
            document.querySelector(".info").textContent = `${comp} beat ${choice}`;
        }
        else {
            document.querySelector(".info").textContent = `${comp} beats ${choice}`;
        }
    }
    if (human >= 5) {
        scoremsg.textContent = "You win."
        document.querySelector(".info").textContent = `${human} - ${pc}`
        pc = 0
        human = 0
        started = 0
        humanscore.textContent = "You:"
        pcscore.textContent = "Computer:"
        
        scoreboard.forEach(scoreboard => { scoreboard.style.visibility = "hidden" })
        document.querySelector(".info").style.visibility = "visible"
        scoremsg.style.visibility = "visible"
        buttons[0].style.visibility = "visible"
        hidechoices()
    }
    else if (pc >= 5) {
        scoremsg.textContent = "You lose."
        document.querySelector(".info").textContent = `${pc} - ${human}`
        pc = 0
        human = 0
        started = 0
        humanscore.textContent = "You:"
        pcscore.textContent = "Computer:"
        scoreboard.forEach(scoreboard => { scoreboard.style.visibility = "hidden" })
        scoremsg.style.visibility = "visible"
        document.querySelector(".info").style.visibility = "visible"
        buttons[0].style.visibility = "visible"
        hidechoices()
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
var choicebuttons = document.querySelectorAll('.choices')


function hidechoices() {
    choicebuttons.forEach(button => {
        button.style.visibility = "hidden"
    }
)
}



if (buttons) {
    for (var button of buttons) {
        button.addEventListener('click', function (e) {
            console.log(this.className)
            if (this.className == "start" && started == 0) {
                started = 1;
                document.querySelector(".info").textContent = ""
                this.style.visibility = "hidden"
                scoremsg.textContent = "Score:"
                scoreboard.forEach(scoreboard => { scoreboard.style.visibility = "visible" })
                choicebuttons.forEach(button => {
                    button.style.visibility = "visible"
                }
            )

            }
            if (started == 1) {
                switch (this.className) {
                    case "rock":
                        play("Rock");
                        break;
                    case "paper":
                        play("Paper");
                        break;
                    case "scissors":
                        play("Scissors");
                        break;
                    default:
                        break;
                }
            }
        })
    };
}

