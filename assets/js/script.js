var startBtn = document.querySelector(".start-btn");
var submitBtn = document.querySelector("#submit");
var currentQuestionIndex = 0;
var timer = 15;

var questionArray = [
    {
        title: "Question 1",
        buttonOne: "option one",
        buttonTwo: "option two",
        buttonThree: "option three",
        buttonFour: "option four",
        correct: "option two"
    },
    {
        title: "Question 2",
        buttonOne: "option one",
        buttonTwo: "option two",
        buttonThree: "option three",
        buttonFour: "option four",
        correct: "option two"
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
        localStorage.setItem("highscore", timer);
        localStorage.setItem("name", document.getElementsByClassName('card-text').value);
      
        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }
}


// function fillLocal() {
//     localStorage.setItem(document.getElementsByClassName('card-text').value);
// }

    // var finalScore = [
    //     {
    //       name: playerOne,
    //       score: timer
    //     }
    // };

    startBtn.addEventListener("click", startQuiz);

    submitBtn.addEventListener("click", updateLocal);