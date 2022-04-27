// local storage config
function displayScores() {
  var highscores = JSON.parse(localStorage.getItem("highscores"))
  highscores.forEach((highscores) => {
    var $scoreLi = document.createElement("li");
    $scoreLi.textContent = `${highscores.initials} - ${highscores.score}`;
    $scoreLi.setAttribute("class", "scores");

    // append to scores element
    var $list = document.getElementById("highScores")
    $list = appendChild($scoreLi);
  })
}

// clear local storage
function clearScores() {
  localStorage.removeItem("highscores");
  location.redirect("/index.html")
}
// click even to clear scores out 
var $clear = document.getElementById("clear-scores-button")
$clear.onClick = clearScores();
displayScores();