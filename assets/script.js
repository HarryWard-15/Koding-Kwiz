var header = document.querySelector(".header")
var button = document.querySelector(".button");
var timerEl = document.querySelector(".timerLeft");
var timerTextEl = document.querySelector(".timer");

var quizQuestions = ["What are you doing", "Hello","Im Harry"];
var questionNumber = 0;
var timeLeft = 100;

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
};

function nextQuestion() {
  if (questionNumber == quizQuestions.length) {
    endQuiz();
  } else {
  header.textContent = quizQuestions[questionNumber];
  questionNumber++;
  }
}