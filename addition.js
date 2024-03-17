let f = document.getElementById("firstNumber");
let l = document.getElementById("secondNumber");
let user = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";

function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    f.textContent = Math.ceil(firstRandomNumber);
    l.textContent = Math.ceil(secondRandomNumber);
    gameResult.textContent = "";
    user.value = "";
}
restartGame();


function checkResult() {
    let firstRandomInteger = parseInt(f.textContent);
    let secondRandomNumber = parseInt(l.textContent);
    let userEnteredSum = parseInt(user.value);
    let sumofTwoRandomIntegers = firstRandomInteger + secondRandomNumber;
    if (userEnteredSum === sumofTwoRandomIntegers) {
        gameResult.textContent = successMessage;
        gameResult.style.backgroundColor = "#028a0f";

    } else {
        gameResult.textContent = tryAgainMessage;
        gameResult.style.backgroundColor = "#1e217c"
    }
}
