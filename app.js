const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const nextGameDisplay = document.getElementById("next-game");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (event) => {
    resultDisplay.innerText = "";
    userChoice = event.target.id;
    userChoiceDisplay.innerText =
      userChoice[0].toUpperCase() + userChoice.slice(1, userChoice.length);
    generateComputerChoice();
    checkResult();
    let x = 1;
    let stopWatch = setInterval(() => {
      nextGameDisplay.innerHTML = `${x} s`;
      x = x + 1;
    }, 1000);
    document
      .querySelectorAll("button")
      .forEach((item) => (item.disabled = true));
    setTimeout(() => {
      document
        .querySelectorAll("button")
        .forEach((item) => (item.disabled = false));
      userChoiceDisplay.innerText = "";
      computerChoiceDisplay.innerText = "";
      resultDisplay.innerText = "";
      clearInterval(stopWatch);
      nextGameDisplay.innerHTML = "";
    }, 3000);
  })
);

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 12);
  switch (randomNumber) {
    case 0:
    case 3:
    case 7:
    case 8:
      computerChoice = "rock";
      computerChoiceDisplay.innerText = formatDisplay(computerChoice);
      break;
    case 1:
    case 5:
    case 11:
    case 9:
      computerChoice = "paper";
      computerChoiceDisplay.innerText = formatDisplay(computerChoice);
      break;
    case 2:
    case 4:
    case 6:
    case 10:
      computerChoice = "scissors";
      computerChoiceDisplay.innerText = formatDisplay(computerChoice);
      break;
    default:
      break;
  }
};

const checkResult = () => {
  if (userChoice === computerChoice.toLowerCase()) {
    result = "It's a draw";
    resultDisplay.innerText = result;
  }

  if (userChoice === "rock" && computerChoice === "scissors") {
    result = "You won";
    resultDisplay.innerText = result;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    result = "You lost";
    resultDisplay.innerText = result;
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lost";
    resultDisplay.innerText = result;
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "You won";
    resultDisplay.innerText = result;
  }

  if (userChoice === "paper" && computerChoice === "scissors") {
    result = "You lost";
    resultDisplay.innerText = result;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result = "You won";
    resultDisplay.innerText = result;
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You won";
    resultDisplay.innerText = result;
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lost";
    resultDisplay.innerText = result;
  }

  if (userChoice === "paper" && computerChoice === "scissors") {
    result = "You lost";
    resultDisplay.innerText = result;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result = "You won";
    resultDisplay.innerText = result;
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You won";
    resultDisplay.innerText = result;
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lost";
    resultDisplay.innerText = result;
  }
};

const formatDisplay = (choice) =>
  choice[0].toUpperCase() + choice.slice(1, choice.length).toLowerCase();
