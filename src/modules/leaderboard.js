const myLeaderboard = [
  {
    name: 'Person 1',
    score: 100,
  },
  {
    name: 'Person 2',
    score: 45,
  },
  {
    name: 'Person 3',
    score: 125,
  },
  {
    name: 'Person 4',
    score: 90,
  },
  {
    name: 'Person 5',
    score: 50,
  },
  {
    name: 'Person 6',
    score: 20,
  },
];

const getScores = async () => {
  let response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/n6JWDDN2b53aMvw85ZcW/scores/')
  let data = await response.json();
  // console.log(await data)
  let result = await data.result
  // console.log(await result)

  // console.log(await result)
  return result

    // .then((response) => response.json()).then((json) => {
    //   const list = json.result;
    //   loadStored(list);
    // });
};

export { getScores as default };