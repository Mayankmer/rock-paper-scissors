const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3 + 1);
    return choices[randomNum];
}