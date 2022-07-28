/* eslint-disable  import/prefer-default-export */
export const submitScore = async (name, score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/D2dTG1N9YVHfEj2JLUys/scores/',
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        user: name,
        score,
      }),
    });
};
