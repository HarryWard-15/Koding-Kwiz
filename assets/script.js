var header = document.querySelector(".header")
var button = document.querySelector(".button");
var timerEl = document.querySelector(".timerLeft");
var timerTextEl = document.querySelector(".timer");
var answer = document.querySelectorAll(".box");
var mainSection = document.querySelector(".main-section");
var question = document.querySelector(".question");
var asking = document.querySelector(".ask");
var scoreEntry = document.querySelector(".scoreEntry");
var buttons = document.querySelector(".button1");

var questionNumber = 0;
var timeLeft = 100;
var questions = [
  "How old are you",
  "What are you",
  "Name",
  "Height",
  "Weight"
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
        timerTextEl.textContent = "You no time left!";
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
  // grab data from the input fields
  var highscores = {
    name: 50,
    age: 100,
    bla: 897,
    ame: 50,
    ae: 100,
    blha: 897,
    nae: 50,
    ag: 100,
    bla: 897,
    me: 50,
    a: 100,
    ba: 897,
  };
  var highscoreObject = JSON.stringify(highscores);
  localStorage.setItem("highscore", highscoreObject);
};

button1.addEventListener("click", function(event) {
  console.log("high");
});