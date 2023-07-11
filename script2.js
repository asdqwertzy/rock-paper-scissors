function nudge(element) {
    if (element instanceof NodeList) {
        element.forEach(function (el) {
            el.classList.toggle('nudge');
            el.classList.toggle('nudge-animation');
            setTimeout(function () {
                el.classList.toggle('nudge');
                el.classList.toggle('nudge-animation');
            }, 100)
        });
    } else {
        element.classList.toggle('nudge');
        element.classList.toggle('nudge-animation');
        setTimeout(function () {
            element.classList.toggle('nudge');
            element.classList.toggle('nudge-animation');
        }, 100)
    }
}

function blinkOut(element) {
    if (element instanceof NodeList) {
        element.forEach(function (el) {
            el.classList.toggle('blink-animation');
        });
    } else {
        element.classList.toggle('blink-animation');
    }
}

function blinkIn(element) {
    if (element instanceof NodeList) {
        element.forEach(function (el) {

            el.classList.toggle('blink-animationReverse');
        });
    } else {
        element.classList.toggle('blink-animationReverse');

    }
}

function swoop(element, val) {
    if (element instanceof NodeList) {
        element.forEach(function (el) {
            var currentPos = parseInt(el.dataset.position);
            var newPos = currentPos - val;
            el.dataset.position = newPos;
            el.style.transform = "translateY(" + newPos + 'px)';
        });
    } else {
        var currentPos = parseInt(element.dataset.position)
        var newPos = currentPos - val;
        element.dataset.position = newPos;

        element.style.transform = "translateY(" + newPos + 'px)';
    }
}




function flash(element, color) {
    const validColors = ["red", "green", "blue", "grey"]
    if (!validColors.includes(color)) {
        console.log("Invalid color:", color)
        return;
    }
    else {
        document.querySelector(`.${element}`).classList.toggle(`flash${color}`)
        setTimeout(function () {
            document.querySelector(`.${element}`).classList.toggle(`flash${color}`);
        }, 130);
    }
}

function getComputerChoice() {
    var choices = ["Rock", "Paper", "Scissors"]
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(choice) {
    var comp = getComputerChoice()
    var choiceLower = choice.toLowerCase()
    if (choice === comp) {
        scoremsg.textContent = "Tie."
        nudge(scoremsg)
        info.textContent = `${comp} and ${choice}`;
        flash(choiceLower, "grey")
    } else if (
        (choice === "Rock" && comp === "Scissors") ||
        (choice === "Paper" && comp === "Rock") ||
        (choice === "Scissors" && comp === "Paper")
    ) {
        human++;
        humanscore.textContent = "You: " + human;
        scoremsg.textContent = "You win the round."
        if (choice == "Scissors" && comp == "Paper") {
            info.textContent = `${choice} beat ${comp}`;
        }
        else {
            info.textContent = `${choice} beats ${comp}`;
        }
        nudge(humanscore)

        flash(choiceLower, "green")


    } else {
        pc++;
        pcscore.textContent = "Computer: " + pc;
        scoremsg.textContent = "Computer wins the round."
        if (comp == "Scissors" && choice == "Paper") {
            info.textContent = `${comp} beat ${choice}`;
        }
        else {
            info.textContent = `${comp} beats ${choice}`;
        }
        nudge(pcscore)

        flash(choiceLower, "red")

    }
    if (human >= 5) {
        scoremsg.textContent = "You win."
        info.textContent = `${human} - ${pc}`
        pc = 0
        human = 0
        started = 0
        humanscore.textContent = "You: 0"
        pcscore.textContent = "Computer: 0"

        document.querySelector('.score2').style.opacity = 0

        info.style.opacity = 1
        scoremsg.style.opacity = 1
        buttons[0].style.opacity = 1
        hidechoices()
    }
    else if (pc >= 5) {
        scoremsg.textContent = "You lose."
        info.textContent = `${human} - ${pc}`
        pc = 0
        human = 0
        started = 0
        humanscore.textContent = "You: 0"
        pcscore.textContent = "Computer: 0"
        document.querySelector('.score2').style.opacity = 0
        scoremsg.style.opacity = 1
        info.style.opacity = 1
        buttons[0].style.opacity = 1
        hidechoices()
    }
}



var started = 0;
var human = 0;
var pc = 0;


var scoremsg = document.querySelector('#score')
var humanscore = document.querySelector('.humanscore')
var pcscore = document.querySelector('.pcscore')
var info = document.querySelector(".info")
var buttons = document.querySelectorAll("button")
var scoreboard = document.querySelectorAll('.score')
var choicebuttons = document.querySelectorAll('.choices')
var scoreboard1 = document.querySelector('.score')



document.querySelectorAll('*').forEach(el => {
    el.dataset.position = 0;
    if (el.id) {
        el.id += " blink";
    } else {
        el.id = "blink";
    }
});

scoremsg.id = "score"
scoreboard1.style.opacity = 0;
document.querySelector("button.start").style.opacity = 1;
function hidechoices() {
    choicebuttons.forEach(button => {
        button.style.opacity = 0
    }
    )
}

hidechoices()


if (buttons) {
    for (var button of buttons) {
        button.addEventListener('click', function (e) {
            if (this.style.opacity === '0') {
            }
            if (this.className == "start" && started == 0) {
                started = 1;
                info.textContent = ""
                this.style.opacity = 0
                scoremsg.textContent = "Score:"
                scoremsg.style.opacity = 1;
                document.querySelector('.score2').style.opacity = 1

                scoreboard.forEach(scoreboard => { scoreboard.style.opacity = 1 })
                choicebuttons.forEach(button => {
                    button.style.opacity = 1
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

