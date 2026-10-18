const checklistItems = document.querySelectorAll("#checklist-items input[type='checkbox']");
const checklistCount = document.getElementById("checklist-count");
const checklistProgress = document.getElementById("checklist-progress");

function updateChecklistProgress() {
  const completed = document.querySelectorAll("#checklist-items input:checked").length;
  checklistCount.textContent = `${completed}/${checklistItems.length}`;
  checklistProgress.value = completed;
  checklistProgress.setAttribute("aria-valuetext", `${completed} of ${checklistItems.length} checks completed`);
}

checklistItems.forEach((checkbox) => {
  checkbox.addEventListener("change", updateChecklistProgress);
});
updateChecklistProgress();

const filterButtons = document.querySelectorAll(".filter-button");
const tipCards = document.querySelectorAll(".tip-card");
const filterStatus = document.getElementById("filter-status");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("is-active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    tipCards.forEach((card) => {
      const isVisible = selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    const categoryName = button.textContent.trim();
    filterStatus.textContent = selectedCategory === "all"
      ? `Showing all ${visibleCount} tips.`
      : `Showing ${visibleCount} ${categoryName.toLowerCase()} tips.`;
  });
});

const quizQuestions = [
  {
    message: "Your account will be paused in 10 minutes. Reply with your password and the code you just received to keep access.",
    answer: "scam",
    explanation: "The message creates urgency and asks for your password and a one-time code. Don’t share those secrets in a message; check your account through a channel you already trust."
  },
  {
    message: "The study group will meet at 3 PM instead of 2 PM today. Please check the class calendar for the room details.",
    answer: "safe",
    explanation: "This fictional note gives a routine update without asking for money, private information, or an urgent action. Still, wording alone cannot verify who sent a real message."
  },
  {
    message: "A community grant is waiting for you. Pay a processing fee today to release your reward—this offer expires soon.",
    answer: "scam",
    explanation: "An unexpected reward tied to an upfront fee and a deadline is a warning sign. Verify offers independently and don’t send money just to claim a surprise prize."
  }
];

const quizStep = document.getElementById("quiz-step");
const quizScore = document.getElementById("quiz-score");
const quizProgressBar = document.getElementById("quiz-progress-bar");
const sampleMessage = document.getElementById("sample-message");
const quizChoices = document.getElementById("quiz-choices");
const answerFeedback = document.getElementById("answer-feedback");
const feedbackHeading = document.getElementById("feedback-heading");
const feedbackExplanation = document.getElementById("feedback-explanation");
const nextQuestion = document.getElementById("next-question");
const quizResult = document.getElementById("quiz-result");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const restartQuiz = document.getElementById("restart-quiz");
let currentQuestion = 0;
let score = 0;

function renderQuestion() {
  const question = quizQuestions[currentQuestion];
  quizStep.textContent = `MESSAGE ${String(currentQuestion + 1).padStart(2, "0")} / ${String(quizQuestions.length).padStart(2, "0")}`;
  quizScore.textContent = `Score: ${score}`;
  quizProgressBar.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
  sampleMessage.textContent = question.message;
  quizChoices.hidden = false;
  answerFeedback.hidden = true;
  quizResult.hidden = true;
}

quizChoices.addEventListener("click", (event) => {
  const choice = event.target.closest("button[data-answer]");
  if (!choice || answerFeedback.hidden === false) return;

  const isCorrect = choice.dataset.answer === quizQuestions[currentQuestion].answer;
  if (isCorrect) score += 1;
  quizScore.textContent = `Score: ${score}`;
  feedbackHeading.textContent = isCorrect ? "That’s right!" : "Good try—here’s what to notice.";
  feedbackExplanation.textContent = quizQuestions[currentQuestion].explanation;
  nextQuestion.textContent = currentQuestion === quizQuestions.length - 1 ? "See my results" : "Next message";
  quizChoices.hidden = true;
  answerFeedback.hidden = false;
  nextQuestion.focus();
});

nextQuestion.addEventListener("click", () => {
  currentQuestion += 1;
  if (currentQuestion < quizQuestions.length) {
    renderQuestion();
    quizChoices.querySelector("button").focus();
    return;
  }

  quizStep.textContent = "SELF-CHECK COMPLETE";
  quizProgressBar.style.width = "100%";
  sampleMessage.hidden = true;
  quizChoices.hidden = true;
  answerFeedback.hidden = true;
  quizResult.hidden = false;
  resultTitle.textContent = `You scored ${score} out of ${quizQuestions.length}.`;
  resultMessage.textContent = score === quizQuestions.length
    ? "Great spotting. Keep pausing and checking through a separate, trusted channel."
    : "Keep practicing. When something feels off, pause and verify independently.";
  restartQuiz.focus();
});

restartQuiz.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  sampleMessage.hidden = false;
  renderQuestion();
  quizChoices.querySelector("button").focus();
});

renderQuestion();
