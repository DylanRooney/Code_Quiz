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

