'use strict';

function playsound(e) {
  const audio = document.querySelector(`.${e.key}-audio`);
  const key = document.querySelector(`.${e.key}`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('trans');
}

function goBack(e) {
  this.classList.remove('trans');
}

const keys = document.querySelectorAll('.button');

keys.forEach((key) => key.addEventListener('transitionend', goBack));
window.addEventListener('keydown', playsound);
