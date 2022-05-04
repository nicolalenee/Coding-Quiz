// global variable to holder thee timer
var time = 100;
// timer element that will be displayed on the page
var $timeEl = document.querySelector(".timer");
var timer;

//questions array
const questions = [
  {
    question: 'Commonly used data types do NOT include:',
    options: [
      'strings',
      'booleans',
      'alerts',
      'numbers'
  ],
    correct: 'alerts'
  },
  {
    question: 'The condition in an if / else statement is enclosed with _____.',
    options: [
      'quotes',
      'curly brackets',
      'parenthesis',
      'square brackets'
    ],
    correct: 'parenthesis'
  },
  {
    question: 'Arrays in JavaScriptt can be used to store ___.',
    options: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above'
    ],
    correct: 'all of the above'
  },
  {
    question: 'String values must be enclosed within ___ when being assigned to variables',
    options: [
      'commas',
      'curly brackets',
      'quotes',
      'parenthesis'
    ],
    correct: 'parenthesis'
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    options: [
      'JavaScript',
      'terminal/bash',
      'for loops',
      'console.log()'
    ]
    ,
    correct: 'console.log()'
  }
]


// function to start the game and the timer
function startQuiz() {
  // remove the welcome screen from the dom
  var $welcomeScreen = document.getElementById("welcome");
  $welcomeScreen.setAttribute("class", "hidden");

  // make the quiz section appear
  var $quiz = document.getElementById("quiz");
  $quiz.removeAttribute("class", "hidden");

  // start the timer
  timer = setInterval(countdown, 1000);
  
  // render the questions one by one
  renderQuestion();
};

// function to countDown the time
function countdown() {
  time--;
  $timeEl.textContent = `Time: ${time}`

  // if user has no time left, then the game is over
  if (time <= 0) {
    endQuiz();
  }
};

// element that renders the question area
var $questionArea = document.querySelector("#quiz");
let questionIndex = 0;

// function to get the questions from the array and render to the page
function renderQuestion() {
  // first, get the current question from the question array at the questionIndex
  let activeQuestion = questions[questionIndex];
  // get the question from the questions array
  let $question = document.getElementById("question");
  $question.textContent = activeQuestion.question;
  // get the options from the questions array by looping throught the options array
  let $options = document.getElementById("options");
  $options.textContent="";

  for (let i = 0; i < activeQuestion.options.length; i++) {
    let $selection = document.createElement("button");
    $selection.setAttribute("class", "btn");
    $selection.textContent = activeQuestion.options[i];
    $selection.addEventListener("click", function () {
      selection($selection.textContent)
    })
    $options.appendChild($selection);
  }
};

// function that displays pop-ups depending on the user's selection
function selection(option) {
  // if a user selects an incorrect answer, subtract 10 sections, then update the time display
  if (option !== questions[questionIndex].correct) {
    // $incorrectDiv = document.createElement("div");
    // $incorrectText = document.createElement("p");
    // $incorrectText.textContent = "Incorrect!"
    // $incorrectText.setAttribute("class", "incorrect");

    // $incorrectDiv.appendChild($incorrectText);
    // $questionArea.appendChild($incorrectDiv);

    alert("incorrect!")

    time -= 10;
    // if the user has neg time left set time to zero
    if ( time < 0) {
      time = 0;
    }
    // display updated time
    $timeEl.textContent = time;
  } else {
    alert("correct!")
  }

  // update to next question
  questionIndex++;


  // if there are no more questions, run function to render endQuiz function else run the renderQuestion function again
  if (questionIndex === questions.length) {
    endQuiz();
  } else {
    renderQuestion();
  }
};

// function that ends the quiz when there is no time left
function endQuiz() {
  // clear the interval timer
  clearInterval(timer);
  // remove the quiz section from the dom
  let $quiz = document.getElementById("quiz");
  $quiz.setAttribute("class", "hidden");

  // display the result section
  var $results = document.getElementById("results");
  $results.removeAttribute("hidden");

  // // click handler that updates localStorage with the new highscore information
  // var $submitScoreButton = document.getElementById("initials-submit-button");
  // $submitScoreButton.addEventListener("click", function() {
  //   let savedScores = JSON.parse(localStorage.getItem("highscores")) || [];
  //   let initials = document.getElementById("initials").value;
  //   var highscores = {
  //     score: time,
  //     initials: initials
  //   };
  //   savedScores.push(highscores);
  //   localStorage.setItem("highscores", JSON.stringify(savedScores))
  //   window.location.href = "highscores.html"
  // })
};

// button that starts game and click to start
var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startQuiz);