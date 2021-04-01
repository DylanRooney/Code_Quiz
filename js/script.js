var timerCount = document.querySelector("#displayTimer");
var displayQstn = document.querySelector("#qstnText");
var navBtn = document.querySelector(".navBtn");
var playBtn = document.querySelector(".playBtn");
var highscore = document.querySelector(".highscore");
var answerBtnEl = document.querySelector("#answerBtn");
var highscoreInput = document.querySelector(".highscoreInput");
var clearScore = document.querySelector(".clearScores");
var qstnFeedback = document.querySelector(".qstnFeedback");
var seeHighscore = document.querySelector("#seeHighscore");
var timercountremaining = 60;
var scoreTotalEl = 0;

var questionsArray = [
    {
        question: "what does HTML stand for?",
        options: ["hello There My Listener ", "Happy Text Muck-up Language ", "Hyper Text Markup Language ", "Header Text Markdown Language "],
        Answer: "Hyper Text Markup Language"
    },

    {
        question: "What does CSS mean?",
        options: ["Certain Style Sheet ", "Current Silly Styles ", "Cascade Style Sheet ", "Cascade Sheet Style "],
        answer: "Cascade Style Sheet"
    },

    {
        question: "Which of these is correct?",
        options: ["HTML is the body ", "HTML is the eyes ", "HTML is the skeleton ", "HTML is the Kidney "],
        Answer: "HTML is the skeleton"
    },

    {
        question: "Which of these is correct?",
        options: ["var 0 = 1 ", "var = x = 1 ", "var x = 1; ", "var x = 1 "],
        Answer: "var x = 1;"
    },

    {
        question: "what are the 2 values a boolean can be?",
        options: ["yes and no  ", "up and down ", "true or false ", "off and on "],
        Answer: "true or false"
    }
];

function playGame() {
    countDownTimer();
    askQstns();
    console.log("Playing Game");
}

function askQstns() {
    answerBtnEl.innerHTML = "";
    var currentIndex = [0];
    var answer = [2];

    generateBtns();

    displayQstn.textContent = questionsArray[currentIndex].question;

    answerBtnEl.addEventListener("click", function (event) {
        checkAnswer();

        function checkAnswer() {
            if (currentIndex < questionsArray.length - 1) {
                if (event.target.textContent == questionsArray[currentIndex].answer) {
                    answerBtnEl.innerHTML = "";
                    currentIndex++;
                    generateBtns();
                    highscore = highscore + timercountremaining;
                    console.log(highscore);
                    qstnFeedback.textContent = "Correct!";
                } else {
                    answerBtnEl.innerHTML = "";
                    currentIndex++;
                    generateBtns();
                    timercountremaining = timercountremaining -10;
                    qstnFeedback.textContent = "Incorrect!";
                }
            } else {
                timercountremaining = 1;
                qstnFeedback.innerHTML = "";
            }
        }
    });
    function generateBtns() {
        for (var i = 0; i < questionsArray[currentIndex].options.length; i++) {
            var btnEl = document.createElement("button");
            btnEl.setAttribute("class", "navBtn BtnEl");
            btnEl.textContent = questionsArray[currentIndex].options[i];
            answerBtnEl.appendChild(btnEl);
            displayQstn.textContent = questionsArray[currentIndex].question;
        }
    }
};

function countDownTimer() {
    var timeInterval = setInterval(function () {
        timercountremaining--;
        timerCount.textContent = timercountremaining;

        if (timercountremaining <= 0) {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
};

function gameOver() {
    timercountremaining = 1;

displayQstn.setAttribute("class", "hideBtn");
answerBtnEl.setAttribute("class", "hideBtn");

endGame();
};

function endgame() {
    var gameOverEl = document.createElement("div");
    gameOverEl.setAttribute("id", "qstnText");
    gameOverEl.textContent = "Game over! Please enter your highscore";
    highscoreInput.appendChild(gameOverEl);

    var showScore = document.createElement("p");
    showScore.setAttribute("class", "highscoreInput");
    showScore.textContent = "Your score is: " + highscore;
    highscoreInput.appendChild(showScore);

    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("class", "highscoreInput");
    nameInput.setAttribute("placeholder", "Enter Name here"); 
    highscoreInput.appendChild(nameInput);

    var submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "playBtn");
    submitBtn.textContent = "Submit";
    highscoreInput.appendChild(submitBtn);

    submitBtn.addEventListener("click", function (event) {
        var userScore = {
            "name": nameInput.value,
            "score": highscore
        };

        var existingScore = JSON.parse(localStorage.getItem("highscore"));
        if (!existingScore) {
            existingScore = []
        };

        existingScore.push(newScore);
        localStorage.setItem("highscore". JSON.stringify(existingScore));

        if (nameInput.value == "") {
            console.log("No Value");
            window.alert("Please enter a valid name");
            event.preventDefault();
        } else {
            seeHighscore();
        }

        function Highscores() {
            highscoreInput.innerHTML = "";
            for (var j = 1; j <= existingScore.length -1; j++) {
                var seeAllScores = document.createElement("ul");
                seeAllScores.setAttribute("class", "currentScores");
                seeAllScores.textContent = "name - " + existingScore[j].name + "Score - " + existingScore[j].score;
                highscoreInput.appendChild(seeAllScores);
            }

            var playAgain = document.createElement("button");
            playAgain.setAttribute("class", "navBtn");
            playAgain.textContent = "Play Again";
            highscoreInput.appendChild(playAgain);
            var clearScores = document.createElement("button");
            clearScores .setAttribute("class", "navBtn clearScores");
            clearScores.textContent = "Clear Scores";
            highscoreInput.appendChild(clearScores);

            clearScores.addEventListener("click", function () {
                existingScore = [];
                window.localStorage.clear();
                seeHighscore();
                console.log(window.localStorage.highscore);
            });
        }
    });
}

seeHighscore.addEventListener("click", function(event) {
     var scoreExisting = JSON.parse(localStorage.getItem("Highscore"));
    timercountremaining = 1;
    playBtn.setAttribute("class", "hideBtn");
    answerBtnEl.innerHTML = "";
    question.innerHTML = "";
    highscoreInput.innerHTML = "";

    if (!scoreExisting) {
        window.alert("No scores available");
    } else {
        for (var l = 0; l <= existingScore.length -1; l++) {
            var seeAllScores = document.createElement("ul");
            seeAllScores.setAttribute("class", "currentScore");
            seeAllScores.textContent = "name - " + existingScore[l].name + "Score - " + existingScore[l].score;
            highscoreInput.appendChild(seeAllScores);
            event.preventDefault();
        }
    };

    var playAgain = document.createElement("button");
    playAgain.setAttribute("class", "navBtn");
    playAgain.textContent = "Play Again";
    highscoreInput.appendChild(playAgain);

    var clearScores = document.createElement("button");
    clearScores.setAttribute("class", "navBtn clearScore");
    clearScores.textContent = "Clear Scores";
    highscoreInput.appendChild(clearScores);

    clearScores.addEventListener("click", function () {
        existingScore = [];
        window.localStorage.clear();
        seeAllScores();
        console.log(window.localStorage.highscore);
    });
});

playBtn.addEventListener("click", function() {

    playGame();
    playBtn.setAttribute("class", "hideBtn");
});