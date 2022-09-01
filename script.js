/*
    The rock paper scissors game.
    The game is works as follows
    -Rock beats scissors
    -scissors beats paper
    -paper beats rock

    The pseudocode for the problem
    User one inputs (rock, paper or scissors)
    User two inputs (rock, paper or scissors) the mpc can be player two

    Compare the inputs of the two players
    if user one is rock and player two is scissors
        player one wins
    else if user one is rock and player two is paper
        player two wins
    else if user one is rock and player two is rock
        players have drawn game
    else if user one is paper and player two is scissors
        player two wins
    else if user one is paper and player two is paper
        players have drawn game
    else if user one is paper and player two is rock
        player one wins
    else if user one is scissors and player two is scissors
        players have drawn game
    else if user one is scissors and player two is paper
        player one wins
    else if user one is scissors and player two is rock
        player two wins
*/

function rockPaperScissors(player_one, player_two){
    if (player_one === player_two){
        console.log("players have drawn game.");
        alert("players have drawn game.");
    } else if (player_one === "rock" && player_two === "scissors"){
        console.log("player one wins.");
        alert("player one wins.");
    } else if (player_one === "rock" && player_two === "paper"){
        console.log("player two wins.");
        alert("player two wins.");
    } else if (player_one === "paper" && player_two === "scissors"){
        console.log("player two wins.");
        alert("player two wins.");
    } else if (player_one === "paper" && player_two === "rock"){
        console.log("player one wins.");
        alert("player one wins.");
    } else if (player_one === "scissors" && player_two === "paper"){
        console.log("player one wins.");
        alert("player one wins.");
    } else if (player_one === "scissors" && player_two === "rock"){
        console.log("player two wins.");
        alert("player two wins.");
    }
}

function gameInput(){
    let player_one = prompt("User one, please enter a value between rock, paper and scissors.");
    let player_two = prompt("User two, please enter a value between rock, paper and scissors.");
    return [player_one, player_two];
}

/* Checking if user input is valid
    if user input is valid
        continue running  game
    else
        return error and ask for input again
*/

function playGame(){

    while (true){
        inputsToGame = gameInput();
        player_one = inputsToGame[0];
        player_two = inputsToGame[1];

        if (player_one.toLocaleLowerCase() === "rock" || player_one.toLocaleLowerCase() === "scissors" || player_one.toLocaleLowerCase() === "rock"){
            rockPaperScissors(player_one, player_two);
            break;
        } else {
            alert("Invalid input.");
            gameInput();
        }
    }
}

playGame();