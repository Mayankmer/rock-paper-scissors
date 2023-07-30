const choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection){
    if((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors")||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"||
    (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `Draw! You both chose ${playerSelection}`;
    }
}

function game(){
    for(let i=0; i<5; i++){
        let playerSelection = prompt("Enter your choise");
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
}
game();
