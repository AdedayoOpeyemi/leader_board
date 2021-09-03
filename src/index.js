import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';
import renderLeaderBoard from './modules/ui.js';
import { postToAPI } from './modules/leaderboard.js';

document.addEventListener(
  'DOMContentLoaded',
  renderLeaderBoard(),
);

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#namefield').value;
  const score = document.querySelector('#scorefield').value;
  postToAPI(JSON.stringify({ user: name, score }));
  renderLeaderBoard();
});

const refreshButton = document.querySelector('#refresh');

refreshButton.addEventListener('click', () => {
  renderLeaderBoard();
});