function getComputerChoice() {
    choices = ["rock", "paper", "scissors" ]
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    return
}

var started = 0;

var buttons = document.querySelectorAll("button")
var scoreboard = document.querySelectorAll('.score')
if(buttons) 
{
    for (var button of buttons)
    {
        button.addEventListener('click', function(e) 
        {
            console.log(this.className)
            if(this.className == "start" && started == 0)
                {
                    started = 1;
                    this.style.visibility = "hidden"
                    scoreboard.forEach(scoreboard => { scoreboard.style.visibility ="visible" })
                    
                }
                
        }); 
    }
}

