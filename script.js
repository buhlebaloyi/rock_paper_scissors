// computer choice
function getComputerChoice(){
    let randomPick = Math.floor(Math.random()*10);

    if (randomPick <= 3){
        return "rock";
    } else if (randomPick > 3 && randomPick <= 6){
        return "paper";
    } else {
        return "scissors";
    }
}


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
        alert("players have drawn game.");
        return "players have drawn game.";
    } else if (player_one === "rock" && player_two === "scissors"){
        alert("player one wins.");
        return "player one wins.";
    } else if (player_one === "rock" && player_two === "paper"){
        alert("player two wins.");
        return "player two wins.";
    } else if (player_one === "paper" && player_two === "scissors"){
        alert("player two wins.");
        return "player two wins.";
    } else if (player_one === "paper" && player_two === "rock"){
        alert("player one wins.");
        return "player one wins.";
    } else if (player_one === "scissors" && player_two === "paper"){
        alert("player one wins.");
        return "player one wins.";
    } else if (player_one === "scissors" && player_two === "rock"){
        alert("player two wins.");
        return "player two wins.";
    }
}

function rockPaperScissorsOut(player_one, player_two){
    if (player_one === player_two){
        return "players have drawn game.";
    } else if (player_one === "rock" && player_two === "scissors"){
        return "player one wins.";
    } else if (player_one === "rock" && player_two === "paper"){
        return "player two wins.";
    } else if (player_one === "paper" && player_two === "scissors"){
        return "player two wins.";
    } else if (player_one === "paper" && player_two === "rock"){
        return "player one wins.";
    } else if (player_one === "scissors" && player_two === "paper"){
        return "player one wins.";
    } else if (player_one === "scissors" && player_two === "rock"){
        return "player two wins.";
    }
}

function gameInput(){
    let multiPlayer = prompt("Press 1 for single player and press 2 for two player");
    console.log(typeof multiPlayer);
    
    if (multiPlayer === "1"){
        let player_one = prompt("User one, please enter a value between rock, paper and scissors.");
        let player_two = getComputerChoice();
        return [player_one.toLowerCase(), player_two.toLowerCase()];
    } else if (multiPlayer === "2"){
        let player_one = prompt("User one, please enter a value between rock, paper and scissors.");
        let player_two = prompt("User two, please enter a value between rock, paper and scissors.");
        return [player_one.toLowerCase(), player_two.toLowerCase()];
    } else {
        alert("Invalid input. Game over.");
    }
}
/* Checking if user input is valid
    if user input is valid
        continue running  game
    else
        return error and ask for input again
*/

function playRound(){
    while (true){
        inputsToGame = gameInput();
        player_one = inputsToGame[0];
        player_two = inputsToGame[1];

        if ((player_one === "rock" || player_one === "paper" || player_one === "scissors") && (player_two === "rock" || player_two === "paper" || player_two === "scissors")){
            rockPaperScissors(player_one, player_two);
            winner = rockPaperScissorsOut(player_one, player_two);
            return winner;
        } else {
            alert("Invalid input.");
            gameInput();
        }
    }
}

function game(){
    let noWinsPlayer1 = 0;
    let noWinsPlayer2 = 0;

    /* 
    for (let i = 0; i < 5; i++){
        winner = playRound();
        if (winner === "player one wins."){
            noWinsPlayer1 = noWinsPlayer1 + 1;
        } else if (winner === "player two wins.") {
            noWinsPlayer2 = noWinsPlayer2 + 1;
        }
    }

    */
    if (noWinsPlayer1 > noWinsPlayer2){
        alert("Player one won round.");
    } else if (noWinsPlayer1 < noWinsPlayer2){
        alert("Player two won round.");
    } else {
        alert("Players drawn games.");
    }
}

// creating event listener for buttons
const btn = element.addEventListener("click", buttonFunction);

function buttonFunction(){
    console.log(btn);
}


game();