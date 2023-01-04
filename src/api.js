const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameId = 'et4ov2RI0XYJEMEKJk6n';

export const getScores = async () => {
  const url = `${BASE_URL}/games/${gameId}/scores/`;
  const response = await fetch(url, { method: 'GET' });
  return response.json();
};

export const postScore = async (user, score) => {
  const url = `${BASE_URL}/games/${gameId}/scores/`;
  const response = await fetch(url, {
    method: 'POST',
    body: { user, score },
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.ok;
};
