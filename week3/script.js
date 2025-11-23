// Quiz Questions
const quizData = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 3
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets"
        ],
        answer: 1
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Text Modern Language",
            "High Text Machine Language",
            "None of the above"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

// DOM elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreBox = document.getElementById("scoreBox");

// Load question
function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => selectAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionEl.innerText = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    restartBtn.style.display = "block";

    scoreBox.innerText = `Your Score: ${score} / ${quizData.length}`;
}

restartBtn.onclick = function () {
    currentQuestion = 0;
    score = 0;
    scoreBox.innerText = "";
    restartBtn.style.display = "none";
    nextBtn.style.display = "block";
    loadQuestion();
};

// Initial load
loadQuestion();
