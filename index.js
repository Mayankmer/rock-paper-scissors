const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}
console.log(getComputerChoice());