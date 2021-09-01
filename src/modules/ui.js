import myLeaderboard from './leaderboard.js';

const renderLeaderBoard = () => {
  const list = document.getElementById('score_list');
  list.innerHTML = '';

  myLeaderboard.forEach((score) => {
    const scoreCard = document.createElement('li');
    scoreCard.innerHTML = `${score.name}: ${score.score}`;
    list.appendChild(scoreCard);
  });
};

export { renderLeaderBoard as default };