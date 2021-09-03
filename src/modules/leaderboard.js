const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n6JWDDN2b53aMvw85ZcW/scores/');
  const data = await response.json();
  const result = await data.result;
  return result;
};

const postToAPI = async (scoreData) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n6JWDDN2b53aMvw85ZcW/scores/', {
    method: 'POST',
    body: scoreData,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json;
  const { result } = data;
  return result;
};

export { getScores, postToAPI };