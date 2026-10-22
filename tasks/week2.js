
const questions = [
    {
        question: "What is JavaScript?",
        options: [
            "A programming language",
            "A database",
            "An operating system",
            "A web browser"
        ],
        answer: 0
    },
    {
        question: "Which keyword declares a block-scoped variable?",
        options: ["var", "let", "define", "dim"],
        answer: 1
    },
    {
        question: "What is the result of 2 + '2'?",
        options: ["4", "22", "NaN", "undefined"],
        answer: 1
    },
    {
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: 2
    },
    {
        question: "Which method prints a message to the console?",
        options: [
            "console.log()",
            "print()",
            "echo()",
            "display()"
        ],
        answer: 0
    }
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const progressElement = document.getElementById("progress");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next");

function showQuestion() {
    const q = questions[currentQuestion];

    progressElement.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    questionElement.textContent = q.question;
    optionsElement.innerHTML = "";
    resultElement.textContent = "";
    nextButton.disabled = true;

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option";

        button.addEventListener("click", () => checkAnswer(index));

        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const q = questions[currentQuestion];
    const buttons = optionsElement.querySelectorAll("button");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === q.answer) {
            button.classList.add("correct");
        } else if (index === selectedIndex) {
            button.classList.add("wrong");
        }
    });

    resultElement.textContent =
        selectedIndex === q.answer ? "Correct!" : "Incorrect!";

    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = "Quiz completed!";
        progressElement.textContent = "5 / 5 questions completed";
        optionsElement.innerHTML = "";
        resultElement.textContent = "You've finished the quiz!";
        nextButton.style.display = "none";
    }
});

showQuestion();
