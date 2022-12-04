var header = document.querySelector(".header")
var button = document.querySelector(".button");
var timerEl = document.querySelector(".timerLeft");
var timerTextEl = document.querySelector(".timer");
var answer = document.querySelectorAll(".box");
var mainSection = document.querySelector(".main-section");
var question = document.querySelector(".question");
var asking = document.querySelector(".ask");
var scoreEntry = document.querySelector(".scoreEntry");
var button1 = document.querySelector(".button1");

var highscores = JSON.parse(localStorage.getItem("highscore"));

var questionNumber = 0;
var timeLeft = 100;
var questions = [
  {
    question: "What is CamelCase?",
    a: "A naming convention for JavaScript",
    b: "A case made from camels",
    c: "A type of hump on a female camel",
    d: "A backpack full of water",
    answer: "a",
  },
  {
    question: "How do you define a function?",
    a: "{ function nameOfFunction() }",
    b: "function = nameOfFunction() {}",
    c: "function nameOfFunction() {}",
    d: "( function nameOfFunctio{} )",
    answer: "c",
  },
  {
    question: "What will the line 'console.log(this)' do?",
    a: "Print 'console.log(this) in the console",
    b: "Print the current scope to the console",
    c: "Produce an typeError message",
    d: "Open the console",
    answer: "b",
  },
  {
    question: "Which of these is not a supported data-type of JavaScript?",
    a: "Number",
    b: "String",
    c: "Boolean",
    d: "Character",
    answer: "d",
  },
  {
    question: "Which line of code would successfully locate a class called timer?",
    a: "document.getElementById(.timer)",
    b: "document.getElementById('timer')",
    c: "document.getElementsByClassName(timer)[0]",
    d: "document.querySelector('.timer')",
    answer: "d",
  },
];
for(let i=0; i<answer.length; i++) {
  answer[i].addEventListener("click", function() {
    nextQuestion();
    console.log("Im wokring");
  });
}

button.addEventListener("click", function(event) {
    startQuiz();
});

function timer() {
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft;
      timeLeft--;
      if (timeLeft == -1) {
        timerEl.textContent = "";
        timerTextEl.textContent = "You have no time left!";
        clearInterval(timeInterval);
      }
    }, 1000);
  };

function startQuiz() {
  nextQuestion();
  timer();
  mainSection.style.display = "none";
  question.style.display = "block";
};

function nextQuestion() {
  if (questionNumber == 5) {
    endQuiz();
  } else {
  asking.textContent = questions[questionNumber];
  questionNumber++;
  }
};

function endQuiz() {
  question.style.display = "none";
  scoreEntry.style.display = "block";
};

function saveHighscore() {
  const nameStr = document.getElementsByClassName("name")[0];
  const nameStrValue = nameStr.value;
  highscores[nameStrValue] = timeLeft;
  console.log(highscores);
  var highscoreObject = JSON.stringify(highscores);
  localStorage.setItem("highscore", highscoreObject);
  resetQuiz();
};

button1.addEventListener("click", function(event) {
  saveHighscore();
});

function resetQuiz() {
  window.location.reload();
}