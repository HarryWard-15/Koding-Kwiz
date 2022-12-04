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
var a = document.querySelector(".a");
var b = document.querySelector(".b");
var c = document.querySelector(".c");
var d = document.querySelector(".d");

var highscores = JSON.parse(localStorage.getItem("highscore"));

if (highscores == null) {
    highscores = {key: "0"};
}

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
    checkAnswer(i);
  });
}

button.addEventListener("click", function(event) {
    startQuiz();
});

button1.addEventListener("click", function(event) {
  saveHighscore();
});


function timer() {
  timer.endTimer = endTimer;
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft;
      timeLeft--;
      if (timeLeft == -1) {
        timerEl.textContent = "";
        timerTextEl.textContent = "You have no time left!";
        clearInterval(timeInterval);
      }
    }, 1000);

    function endTimer() {
      clearInterval(timeInterval);
    }
  };

function startQuiz() {
  nextQuestion();
  timer();
  mainSection.style.display = "none";
  question.style.display = "block";
};

function checkAnswer(i) {
  var selectAnswer = document.getElementsByClassName("box")[i];
  var selectAnswerData = selectAnswer.dataset["key"];
  console.log(selectAnswerData);
  console.log(questions[questionNumber-1]["answer"]);
  if (selectAnswerData == questions[questionNumber-1]["answer"]) {
    console.log("correct");
  } else {
    timeLeft = timeLeft - 15;
  }
  nextQuestion();
}

function nextQuestion() {
  if (questionNumber == 5) {
    endQuiz();
  } else {
  asking.textContent = questions[questionNumber]["question"];
  a.textContent = questions[questionNumber]["a"];
  b.textContent = questions[questionNumber]["b"];
  c.textContent = questions[questionNumber]["c"];
  d.textContent = questions[questionNumber]["d"];
  questionNumber++;
  }
};

function endQuiz() {
  question.style.display = "none";
  scoreEntry.style.display = "block";
  timer.endTimer();
};

function saveHighscore() {
  const nameStr = document.getElementsByClassName("name")[0];
  const nameStrValue = nameStr.value;
  highscores[nameStrValue] = timeLeft;
  var highscoreObject = JSON.stringify(highscores);
  localStorage.setItem("highscore", highscoreObject);
};

