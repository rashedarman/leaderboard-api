import { getScores } from './api';
import './reset.css';
import './styles.css';

const refreshBtn = document.querySelector('.refresh-btn');
const scoreBoard = document.querySelector('.score-board');

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

refreshBtn.addEventListener('click', renderScores);
