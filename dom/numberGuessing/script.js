let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);
const guessField = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const form = document.querySelector("form");
const guesses = document.querySelector(".guesses");
const loworHi = document.querySelector("#loworHi");
const lastResult = document.querySelector(".lastResult");
let userInput = 0;
let attempt = 9;
let prevGuess = [];
let start = true;

if (start) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    userInput = parseInt(guessField.value);

    validateUserInput(userInput);
  });
}

function validateUserInput(userInput) {
  if (userInput === "" || isNaN(userInput)) {
    alert("please enter value!");
  } else if (userInput === randomNumber) {
    alert("You won! 🤴");
    endGame();
  } else if (userInput < randomNumber && attempt >= 0) {
    loworHi.innerHTML = `${userInput} is low`;
    lastResult.innerHTML = `${attempt}`;
    attempt--;
    prevGuess.push(userInput);
    guesses.innerHTML = prevGuess.join(", ");
  } else if (userInput > randomNumber && attempt >= 0) {
    loworHi.innerHTML = `${userInput} is high`;
    lastResult.innerHTML = `${attempt}`;
    attempt--;
    prevGuess.push(userInput);
    guesses.innerHTML = prevGuess.join(", ");
  } else {
    alert(
      `Game over! Your reached the maximum attempt! correct number is ${randomNumber}`
    );
    start = false;
    endGame();
  }
}

function endGame() {
  guessField.value = "";
  attempt = 10;
  lastResult.innerHTML = `${attempt}`;
  loworHi.innerHTML = "";
  randomNumber = Math.floor(Math.random() * 101);
  start = true;
  prevGuess = [];
  guesses.innerHTML = "";
}
