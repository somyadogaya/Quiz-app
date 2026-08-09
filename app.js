let questions = [
    {
        question: "Which operator is used for remainder operation in programming?",
        answer: [
            { text: "+", correct: false },
            { text: "/", correct: false },
            { text: "*", correct: false },
            { text: "%", correct: true }
        ]
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        answer: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "static", correct: false }
        ]
    },
    {
        question: "Which data structure works on FIFO (First In First Out)?",
        answer: [
            { text: "Stack", correct: false },
            { text: "Queue", correct: true },
            { text: "Array", correct: false },
            { text: "Tree", correct: false }
        ]
    },
    {
        question: "Which loop runs at least once even if the condition is false?",
        answer: [
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "do-while", correct: true },
            { text: "foreach", correct: false }
        ]
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        answer: [
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "!=", correct: false },
            { text: "!==", correct: false }
        ]
    },
    {
        question: "Which method is used to convert a string to an integer in JavaScript?",
        answer: [
            { text: "parseInt()", correct: true },
            { text: "int()", correct: false },
            { text: "stringToInt()", correct: false },
            { text: "toInteger()", correct: false }
        ]
    }
];
let questionElement = document.querySelector("#question");
let answerBtn = document.querySelector("#answer-btn");
let nextBtn = document.querySelector("#next-btn");
let currentIndex = 0;
let score = 0;

function startQuize() {
    currentIndex = 0;
    score = 0;
    showQuestion();
    nextBtn.innerHTML = "Next";
}
startQuize();
function showQuestion() {
    resetBtn();
    let questionData = questions[currentIndex];
    questionElement.innerHTML = currentIndex + 1 + ". " + questionData.question;
    questionData.answer.forEach((answer) => {
        let btn = document.createElement("button");
        btn.innerHTML = answer.text;
        btn.classList.add("btn");
        if (answer.correct) {
            btn.dataset.ans = answer.correct;
        }
        answerBtn.append(btn);
        console.log(btn);
        btn.addEventListener("click", selectAns);
    })
}
function resetBtn() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
        answerBtn.firstChild.remove();
    }
}

function selectAns(evt) {
    let correctAns = evt.target.getAttribute("data-ans");
    console.log(correctAns)
    if (correctAns) {
        evt.target.classList.add("correct");
        score++;
    }
    else {
        evt.target.classList.add("uncorrect");
    }
    Array.from(answerBtn.children).forEach((button) => {
        if (button.dataset.ans) {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";
}
function scoreDispaly() {
    resetBtn();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
    
}
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    }
    else if (currentIndex == questions.length + 1) {
        startQuize();
    }
    else {
        scoreDispaly();
    }
})