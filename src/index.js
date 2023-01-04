import { getScores, postScore } from './api';
import './reset.css';
import './styles.css';

const refreshBtn = document.querySelector('.refresh-btn');
const scoreBoard = document.querySelector('.score-board');
const scoreForm = document.querySelector('.score-form');

const renderScores = async () => {
  const { result: scores } = await getScores();
  if (!scores) return null;

  for (const { user, score } of scores) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${user}</td>
      <td>${score}</td>
    `;
    scoreBoard.appendChild(tr);
  }
};

const submitScore = async (e) => {
  e.preventDefault();

  const formData = new FormData(scoreForm);
  const user = formData.get('user');
  const score = formData.get('score');

  const posted = await postScore(user, score);
  if (posted) scoreForm.reset();
};

refreshBtn.addEventListener('click', renderScores);
scoreForm.addEventListener('submit', submitScore);
