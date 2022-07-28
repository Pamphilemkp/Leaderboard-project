import './style.css';
import { submitScore } from './SubmitGameScore.js';
import { AddGame } from './AddGames.js';
import { display } from './displayList.js';

const Name = document.querySelector('#name');
const score = document.querySelector('#score');
const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (Name.value.trim() !== '' && score.value.trim() !== '') {
    submitScore(Name.value, score.value);
    AddGame(Name.value, score.value);

    Name.value = '';
    score.value = '';
  }
});

document.addEventListener('DOMContentLoaded', display);
refresh.addEventListener('click', () => {
  window.location.reload();
});