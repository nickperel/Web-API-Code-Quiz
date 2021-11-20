var startBtn = document.querySelector(".start-btn");

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

var currentQuestionIndex = 0;

function startQuiz() {
    document.querySelector(".title-prompt").style.display = "none"
    document.querySelector(".quiz-questions").style.display = "flex"

    createQuestion();
}

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

    if (currentQuestionIndex >= questionArray.length) {
        window.alert("You are finished with the quiz! Let's see how you did.")
    }
    else {
        createQuestion();
    }


}

function wrongAnswer() {
    console.log("wrong!")
}

    startBtn.addEventListener("click", startQuiz);