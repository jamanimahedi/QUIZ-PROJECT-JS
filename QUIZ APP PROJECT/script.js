const quizData = [
  {
    question: "What is JavaScript?",
    options: ["Programming language", "Database", "OS", "Browser"],
    correct: 0
  },
  {
    question: "Which keyword is used to declare a variable?",
    options: ["var", "int", "string", "float"],
    correct: 0
  },
  {
    question: "Which data type is 'true'?",
    options: ["String", "Number", "Boolean", "Array"],
    correct: 2
  },
  {
    question: "Which symbol is used for comments in JS?",
    options: ["//", "##", "<!-- -->", "**"],
    correct: 0
  },
  {
    question: "How do you print in console?",
    options: ["print()", "console.log()", "echo()", "log()"],
    correct: 1
  },
  {
    question: "Which operator is used for addition?",
    options: ["-", "+", "*", "/"],
    correct: 1
  },
  {
    question: "What is 2 + '2'?",
    options: ["4", "22", "NaN", "Error"],
    correct: 1
  },
  {
    question: "Which bracket is used for array?",
    options: ["{}", "()", "[]", "<>"],
    correct: 2
  },
  {
    question: "Which keyword is used for function?",
    options: ["func", "function", "def", "method"],
    correct: 1
  },
  {
    question: "Which method shows alert popup?",
    options: ["alert()", "prompt()", "confirm()", "log()"],
    correct: 0
  }
];

// ===== VARIABLES =====
const qnsNumberEl = document.getElementById("qnsNumber");
const qns = document.getElementById("qns");
const options = document.getElementById("options");

let currentIndex = 0;
let score = 0;

// ===== LOAD QUESTION =====
function loadQns() {
  let currentQns = quizData[currentIndex];

  qnsNumberEl.innerText = `Question ${currentIndex + 1}/${quizData.length}`;
  qns.innerText = currentQns.question;

  options.innerHTML = "";

  currentQns.options.forEach((opt, index) => {
    let col = document.createElement("div");
    col.classList.add("col-md-6");

    let button = document.createElement("button");
    button.innerText = opt;
    button.className = "btn btn-outline-primary w-100";

    // 👉 Simple click → next question
    button.onclick = function () {
      if (index === currentQns.correct) {
        score++;
      }
      nextQns();
    };

    col.appendChild(button);
    options.appendChild(col);
  });
}

// ===== NEXT QUESTION =====
function nextQns() {
  if (currentIndex < quizData.length - 1) {
    currentIndex++;
    loadQns();
  } else {
    showResult();
  }
}

function showResult() {
  const quizCard = document.querySelector(".quiz-card");

  quizCard.innerHTML = `
    <h2 class="text-center text-success">🎉 Quiz Finished</h2>
    <h3 class="text-center mt-3">Score: ${score}/${quizData.length}</h3>
    <div class="text-center mt-4">
      <button class="btn btn-primary" onclick="location.reload()">Restart</button>
    </div>
  `;
}


loadQns();