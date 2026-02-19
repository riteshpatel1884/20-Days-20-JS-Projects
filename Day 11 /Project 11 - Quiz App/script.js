class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentIndex = 0;
    this.score = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  checkAnswer(option) {
    if (option === this.getCurrentQuestion().answer) {
      this.score++;
    }
  }

  nextQuestion() {
    this.currentIndex++;
  }

  isFinished() {
    return this.currentIndex >= this.questions.length;
  }
}



const questions = [
  {
    question: "What does OOP stand for?",
    options: [
      "Object Oriented Programming",
      "Open Online Program",
      "Object Order Process",
    ],
    answer: "Object Oriented Programming",
  },
  {
    question: "Which keyword is used to create a class?",
    options: ["function", "class", "object"],
    answer: "class",
  },
];


const quiz = new Quiz(questions);

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  if (quiz.isFinished()) {
    questionEl.innerText = "Quiz Finished!";
    optionsEl.innerHTML = "";
    scoreEl.innerText = `Score: ${quiz.score}`;
    nextBtn.style.display = "none";
    return;
  }

  const q = quiz.getCurrentQuestion();
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => quiz.checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  quiz.nextQuestion();
  loadQuestion();
});

loadQuestion();
