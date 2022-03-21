var getUserChoice = function(userInput) {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    }else {
        console.log("Please choose rock, paper, or scissors")
        return userInput;
    }
}
var getComputerChoice = function() {
    var number = Math.floor(Math.random() * 3)
    if (number === 0) {
        computerChoice = 'rock'
        } else if (number === 1) {
            computerChoice = 'paper'
            } else if (number === 2)
                computerChoice = 'scissors'
    return computerChoice;        
}
var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice){
       return ('Tie Game')
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper')
        return ('Computer Won')
        if (computerChoice === 'scissors')
        return ('You Won')
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors')
        return ('Computer Won')
        if (computerChoice === 'rock')
        return ('You Won')
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper')
        return ('You Won')
        if (computerChoice === 'rock')
        return ('Computer Won')
    }
}
var playGame = function() {
    var userChoice = getUserChoice('rock')
    var computerChoice = getComputerChoice()
    console.log (`User is ${userChoice}`)
    console.log (`Computer is ${computerChoice}`)
    console.log (determineWinner(userChoice,computerChoice))  
}
playGame()
