// saveHighscore(); // calling fucntion from script.js to initialize scoreboard data.

var olEl = document.querySelector(".scoreboard");
var clearScores = document.querySelector(".clearScores");

var highscoreObject = JSON.parse(localStorage.getItem("highscore"));

let sortedHighscores = [];
for (var name in highscoreObject) {
    sortedHighscores.push([name, highscoreObject[name]]);
};

sortedHighscores.sort(function(a, b) {
    return b[1] - a[1];
});

for (let i=0 ; i<sortedHighscores.length-1 ; i++) {
    liEl = document.createElement("li");
    olEl.appendChild(liEl);
    liEl.innerHTML = `${sortedHighscores[i][0]}: ${sortedHighscores[i][1]}`;
};

clearScores.addEventListener("click", function() {
    localStorage.clear();
    window.location.reload();
});





  