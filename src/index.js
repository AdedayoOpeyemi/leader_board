import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';
import renderLeaderBoard from './modules/ui.js';

document.addEventListener(
  'DOMContentLoaded',
  renderLeaderBoard(),
);

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let name = document.querySelector('#namefield').value;
  let score = document.querySelector('#scorefield').value;
  // let dataToPost = {\"${name}\" + ": " + \"${score}\"}
  console.log({"user": name, "score": score})
  postToAPI(JSON.stringify({"user": name, "score": score}))

})

const postToAPI = async (scoreData) => {
  let response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n6JWDDN2b53aMvw85ZcW/scores/', {
    method: 'POST',
    body: scoreData,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  let data = await response.json;
  let result = data.result
  return result
};