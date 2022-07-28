import { AddGame } from './AddGames.js';
/* eslint-disable  import/prefer-default-export */
export const display = async () => {
  const val = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/D2dTG1N9YVHfEj2JLUys/scores/');
  const response = await val.json();
  const res = response.result;
  res.forEach((value) => {
    AddGame(value.user, value.score);
  });
};