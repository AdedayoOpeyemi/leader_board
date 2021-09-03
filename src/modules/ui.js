import getScores from './leaderboard.js';

const clearBoard = () => {
  const list = document.getElementById('score_list');
  list.innerHTML = '';
};

const renderLeaderBoard = async () => {
  const list = document.getElementById('score_list');
  clearBoard();
  const scores = await getScores();
  scores.forEach((score) => {
    const scoreCard = document.createElement('li');
    scoreCard.innerHTML = `${score.user}: ${score.score}`;
    list.appendChild(scoreCard);
  });
};

export { renderLeaderBoard as default };