var startBtn = document.querySelector(".start-btn");
var submitBtn = document.querySelector("#submit");
const finalScore = document.getElementById("initials").value;
const latestScore = localStorage.getItem("timer")
// localStorage.setItem("highScores", )
finalScore.innerText = timer;
var currentQuestionIndex = 0;
var timer = 60;

var questionArray = [
    {
        title: "Commonly used data types do NOT include:",
        buttonOne: "1. Strings",
        buttonTwo: "2. Booleans",
        buttonThree: "3. Alerts",
        buttonFour: "4. Numbers",
        correct: "3. Alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed with ___________.",
        buttonOne: "1. Quotes",
        buttonTwo: "2. Curly Brackets",
        buttonThree: "3. Square Brackets",
        buttonFour: "4. Parenthesis",
        correct: "4. Parenthesis"
    },
    {
        title: "Arrays in JavaScript can be used to store __________.",
        buttonOne: "1. Numbers and Strings",
        buttonTwo: "2. Other Arrays",
        buttonThree: "3. Booleans",
        buttonFour: "4. All of the Above",
        correct: "4. All of the Above"
    },
    {
        title: "String values must be enclosed within ______ when being assigned to variables.",
        buttonOne: "1. Quotes",
        buttonTwo: "2. Commas",
        buttonThree: "3. Curly Brackets",
        buttonFour: "4. Parenthesis",
        correct: "1. Quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        buttonOne: "1. JavaScript",
        buttonTwo: "2. console.log",
        buttonThree: "3. for loops",
        buttonFour: "4. terminal/bash",
        correct: "2. console.log"
    },
]

function startQuiz(timerId) {
    document.querySelector(".title-prompt").style.display = "none"
    document.querySelector(".quiz-questions").style.display = "flex"
    document.querySelector(".quiz-end").style.display = "none"
    
    clock();
    createQuestion();
};

function createQuestion() {
    const buttonOne = questionArray[currentQuestionIndex].buttonOne;
    const buttonTwo = questionArray[currentQuestionIndex].buttonTwo;
    const buttonThree = questionArray[currentQuestionIndex].buttonThree;
    const buttonFour = questionArray[currentQuestionIndex].buttonFour;
    const correct = questionArray[currentQuestionIndex].correct;

    // create the elements
    var questionTextH1 = document.createElement("h1");
    questionTextH1.textContent = questionArray[currentQuestionIndex].title;

    var optionBtn1 = document.createElement("button");
    optionBtn1.textContent = buttonOne;
    optionBtn1.addEventListener("click", buttonOne === correct ? nextQuestion : wrongAnswer)

    var optionBtn2 = document.createElement("button");
    optionBtn2.textContent = buttonTwo;
    optionBtn2.addEventListener("click", buttonTwo === correct ? nextQuestion : wrongAnswer)

    var optionBtn3 = document.createElement("button");
    optionBtn3.textContent = buttonThree;
    optionBtn3.addEventListener("click", buttonThree === correct ? nextQuestion : wrongAnswer)

    var optionBtn4 = document.createElement("button");
    optionBtn4.textContent = buttonFour;
    optionBtn4.addEventListener("click", buttonOne === correct ? nextQuestion : wrongAnswer)

    var quizQuestionsDiv = document.querySelector(".quiz-questions");

    quizQuestionsDiv.appendChild(questionTextH1)
    quizQuestionsDiv.appendChild(optionBtn1)
    quizQuestionsDiv.appendChild(optionBtn2)
    quizQuestionsDiv.appendChild(optionBtn3)
    quizQuestionsDiv.appendChild(optionBtn4)
}

function nextQuestion() {
    currentQuestionIndex++; // --> currentQuestionIndex = currentQuestionIndex + 1;
    var quizQuestionsDiv = document.querySelector(".quiz-questions");
    quizQuestionsDiv.innerHTML = "";

    if (currentQuestionIndex >= questionArray.length || timer <= 0) {
        window.alert("You are finished with the quiz! Let's see how you did.")

        document.querySelector(".quiz-questions").style.display = "none"
        document.querySelector(".quiz-end").style.display = "flex"
        document.getElementById("final-score").textContent = ("Your Final Score is: " + timer);
    }
    else {
        createQuestion();
    }
}

function wrongAnswer() {
    console.log("wrong!")

    if (timer >= 10) {
        timer = timer - 10;
        nextQuestion();
    }
    else {
        var countdown = document.querySelector("#timer-value");
        timer = 0;
        countdown.textContent = ("Timer: " + timer);
    }
};

function clock () {
    var timerId = setInterval(function() {
        if (timer <= 0 || currentQuestionIndex >= questionArray.length) {
            clearInterval(timerId)
            // alert("Time is up! Let's check your score.");
    
            document.querySelector(".quiz-questions").style.display = "none"
            document.querySelector(".quiz-end").style.display = "flex"
        }
        else {
            var countdown = document.querySelector("#timer-value");
            timer--;
            countdown.textContent = ("Timer: " + timer);
            }
        }, 1000);
    }

var updateLocal = function() {

    // check localStorage for high score, if it's not there, use 0
    var highScore = localStorage.getItem("highscore");
     if (highScore === null) {
        highScore = 0;
    }
      
    // if player has more money than the high score, player has new high score!
    if (timer > highScore) {
        localStorage.setItem("highscore", JSON.stringify(timer));
        var x = localStorage.setItem("name", document.getElementsByClassName('card-text').value = text);
        document.getElementById(finalScore).innerText = x;
      
        alert(finalScore.name + " now has the high score of " + playerInfo.money + "!");
    } else {
        localStorage.setItem(JSON.stringify(finalScore), JSON.stringify(timer));
        var x = localStorage.setItem("name", document.getElementById('card-text').value = text);
        document.getElementById("initials").innerText = finalScore;
        alert(finalScore.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }
}


// function fillLocal() {
//     localStorage.setItem(document.getElementsByClassName('card-text').value);
// }

    // var finalScore = [
    //     {
    //       name: initials.value,
    //       score: latestScore
    //     }
    // };

    startBtn.addEventListener("click", startQuiz);

    submitBtn.addEventListener("click", updateLocal);