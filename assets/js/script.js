// variables for dom elements
var formEl = document.querySelector("#start-game-form");
var startBtnEl = document.querySelector("#start-btn");
var welcomeEl = document.querySelector("#welcome");

//questions object

// start game function
var startGame = function (event) {
  // prevent browser refresh
  event.preventDefault();
  //TEST
  console.log("GAME START");
  // remove welcome content
  welcomeEl.remove();
}

// function that generates a new question
var generateQuestion = function (event) {

}


// start game button listener
startBtnEl.addEventListener("click", startGame);