

import { rocketImage } from './assets';

export let rocket = {
  x : 450,
  y : 1250,
  angle : 0,
  image : rocketImage
}

window.addEventListener(
  'keydown',
  function(event) {
    console.log(event.key, 'pressed');
    if (event.key == 'ArrowRight' || event.key == 'd') {
      rocket.x += 15;
    }
    if (event.key == 'ArrowLeft' || event.key == 'a') {
      rocket.x -= 15;
    }
  })

