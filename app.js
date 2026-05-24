const form = document.querySelector("#play-form");
const results = document.querySelector("#results");
const cards = document.querySelector("#cards");
const moreButton = document.querySelector("#more-button");
const resetButton = document.querySelector("#reset-button");
const emptyMessage = document.querySelector("#empty-message");

let allPlays = [];
let currentMatches = [];
let visibleCount = 0;

async function loadPlays() {
  try {
    const response = await fetch("data/plays.json");
    if (!response.ok) {
      throw new Error("遊びデータを読み込めませんでした");
    }
    allPlays = await response.json();
  } catch (error) {
    allPlays = window.IMANANI_FALLBACK_PLAYS || [];
  }
  if (allPlays.length === 0) throw new Error("遊びデータが空です");
}

function getSelected(name) {
  return new FormData(form).get(name);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function findPlays(age, situation) {
  const exact = allPlays.filter((play) => play.ages.includes(age) && play.situations.includes(situation));
  const fallback = allPlays.filter((play) => {
    const ageMatch = play.ages.includes(age);
    const situationMatch = play.situations.includes(situation);
    return (ageMatch || situationMatch) && !exact.includes(play);
  });

  emptyMessage.hidden = exact.length >= 3;
  return [...shuffle(exact), ...shuffle(fallback)];
}

function renderCard(play) {
  const article = document.createElement("article");
  article.className = "play-card";
  article.innerHTML = `
    <h3>${escapeHtml(play.title)}</h3>
    <dl>
      <div>
        <dt>やり方</dt>
        <dd>${escapeHtml(play.description)}</dd>
      </div>
      <div>
        <dt>声かけ例</dt>
        <dd>${escapeHtml(play.voice)}</dd>
      </div>
      <div>
        <dt>必要なもの</dt>
        <dd>${escapeHtml(play.item)}</dd>
      </div>
    </dl>
  `;
  return article;
}

function renderResults() {
  cards.innerHTML = "";
  currentMatches.slice(0, visibleCount).forEach((play) => {
    cards.appendChild(renderCard(play));
  });
  moreButton.hidden = visibleCount >= currentMatches.length;
}

function showResults() {
  const age = getSelected("age");
  const situation = getSelected("situation");
  currentMatches = findPlays(age, situation);
  visibleCount = Math.min(3, currentMatches.length);
  renderResults();
  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showResults();
});

moreButton.addEventListener("click", () => {
  visibleCount = Math.min(visibleCount + 3, currentMatches.length);
  renderResults();
});

resetButton.addEventListener("click", () => {
  results.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

loadPlays().catch(() => {
  form.querySelector(".primary-button").disabled = true;
  form.querySelector(".primary-button").textContent = "データ読み込み中";
});
