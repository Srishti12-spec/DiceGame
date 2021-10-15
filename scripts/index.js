let firstPlayerName = "";
let secondPlayerName = "";
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let totalScore = 0;
// Submit the form. when clicking on start game button this function is called
function onSubmit(event) {
    event.preventDefault();
    const formData = document.getElementsByTagName("input");
    firstPlayerName = formData[0].value;
    secondPlayerName = formData[1].value;
    totalScore = formData[2].value;
    document.getElementById("form-container").style.display = "none";
    document.getElementById("board-container").style.display = "block";
    document
        .getElementById("player1")
        .getElementsByClassName("heading")[0].innerHTML = firstPlayerName;

    document
        .getElementById("player2")
        .getElementsByClassName("heading")[0].innerHTML = secondPlayerName;

}
// Roll Dice function.When the active player clicks on the roll dice button 
// this function gets called
function rollDice(playerIndex) {
    const randomNumber = getRandom();
    const playerNodes = document.getElementById(`player${playerIndex}`);
    playerNodes
        .querySelector(".dice img")
        .setAttribute("src", `./images/dice${randomNumber}.png`);
    switch (playerIndex) {
        case 1:
            firstPlayerScore += randomNumber;
            playerNodes.getElementsByClassName("score")[0].innerHTML = firstPlayerScore;
            playerNodes
                .getElementsByTagName("input")[0]
                .setAttribute("disabled", true);
            document
                .getElementById("player2")
                .getElementsByTagName("input")[0]
                .removeAttribute("disabled");
            break;
        case 2:
            secondPlayerScore += randomNumber;
            playerNodes.getElementsByClassName("score")[0].innerHTML = secondPlayerScore;
            playerNodes
                .getElementsByTagName("input")[0]
                .setAttribute("disabled", true);
            document
                .getElementById("player1")
                .getElementsByTagName("input")[0]
                .removeAttribute("disabled");
            break;
        default:
            break;
    }
    checkIfWinnerExist();
}
//This function generates the rendom number
function getRandom() {
    return Math.floor(Math.random() * 6) + 1;
}


// This function gets called after every dice roll and check if the current player is the winner
function checkIfWinnerExist() {
    if (firstPlayerScore >= totalScore) {
        document.getElementById(
            "player1"
        ).innerHTML += `<div class="winner"></div>`;
        document
            .getElementById("player2")
            .getElementsByTagName("input")[0]
            .removeAttribute("disabled", true);
    }


    if (secondPlayerScore >= totalScore) {
        document.getElementById(
            "player2"
        ).innerHTML += `<div class="winner"></div>`;
        document
            .getElementById("player1")
            .getElementsByTagName("input")[0]
            .removeAttribute("disabled", true);
    }
}
// This function get called when user clicks on the reset button
function resetCurrentGame(){
    document.getElementsByClassName("score")[0].innerHTML = 0;
    document.getElementsByClassName("score")[1].innerHTML = 0;
    firstPlayerScore = 0;
    secondPlayerScore = 0;

    document.getElementById(
        "player1"
    ).innerHTML = `<h1 class="heading">
         ${firstPlayerName}

        </h1>
        <h1 class="score">
            0
        </h1>
        <div class="dice">
            <img src="./images/dice1.png" />
        </div>
        <div class="input-group button" id="player-1-button">
            <input type="button" value="Roll Dice" onclick="rollDice(1)" />
        </div>`;

        document.getElementById(
            "player2"
        ).innerHTML = `<h1 class="heading">
             ${secondPlayerName}
    
            </h1>
            <h1 class="score">
                0
            </h1>
            <div class="dice">
                <img src="./images/dice1.png" />
            </div>
            <div class="input-group button" id="player-2-button">
                <input type="button" value="Roll Dice" onclick="rollDice(2)" disabled />
            </div>`;
}
// This function get called when user clicks on the restart button
function restartGame() {
    resetCurrentGame();
    firstPlayerName = "";
    secondPlayerName = "";
    firstPlayerScore = 0;
    secondPlayerScore = 0;
    totalScore = 0;
    document.getElementById("form-container").style.display = "flex";
    document.getElementById("board-container").style.display = "none";
    const formData = document.getElementsByTagName("input");
    firstPlayerName = formData[0].value = "";
    secondPlayerName = formData[1].value = "";
    totalScore = formData[2].value = undefined;
}