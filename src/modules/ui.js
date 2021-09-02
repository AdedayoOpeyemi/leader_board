import getScores from './leaderboard.js';

const renderLeaderBoard = async () => {
  const list = document.getElementById('score_list');
  list.innerHTML = '';
  let scores = await getScores()
  scores.forEach((score) => {
    const scoreCard = document.createElement('li');
    scoreCard.innerHTML = `${score.name}: ${score.score}`;
    list.appendChild(scoreCard);
  });
};

export { renderLeaderBoard as default };