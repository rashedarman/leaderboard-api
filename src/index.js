import { getScores, postScore } from './api.js';
import './styles.css';

const refreshBtn = document.querySelector('.refresh-btn');
const scoreBoard = document.querySelector('.score-board');
const scoreForm = document.querySelector('.score-form');

const renderScores = async () => {
  // clear scoreboard
  scoreBoard.replaceChildren();

  const { result: scores } = await getScores();
  if (!scores) return;

  const tbody = document.createElement('tbody');
  scores.forEach(({ user, score }) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${user}</td><td>${score}</td>`;
    tbody.appendChild(tr);
  });
  scoreBoard.appendChild(tbody);
};

const submitScore = async (e) => {
  e.preventDefault();

  const formData = new FormData(scoreForm);
  const user = formData.get('user');
  const score = formData.get('score');

  const posted = await postScore(user, score);
  if (posted) {
    scoreForm.reset();
    renderScores();
  }
};

renderScores();

refreshBtn.addEventListener('click', renderScores);
scoreForm.addEventListener('submit', submitScore);
