  

let app = document.querySelector('#app');
let canvas = document.createElement('canvas');
app.appendChild(canvas);

canvas.width = 1000;
canvas.height = 2000;
canvas.style.width = '50vw';
canvas.style.height = '100vw';
canvas.style.border = '10px solid black'

import { rocketImage } from './assets/rocket/rocketImage'

import { rocket } from './controls'

import { satelliteImage } from
  './assets/satellite/satelliteImage'

let ctx = canvas.getContext('2d');

/*
rocketImage.addEventListener("load",
  function() {
    ctx.drawImage(rocketImage, 450, 1250, 100, 200);
  });
*/

let y = 0;
let x = Math.random() * canvas.width;


function animateRocket(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let angle = (t * Math.PI * 2) / 1000
  let actualX = rocket.x + Math.cos(angle) * 5
  ctx.drawImage(rocketImage, actualX, 1250, 100, 200);
  ctx.drawImage(satelliteImage, x, y, 200,200);
  y += 5
  if (y > canvas.height + 50) {
    y = 0;
    x = Math.random() * canvas.width;
  }
  
/*
  ctx.font = '66pt futura';
  ctx.fillText(
    `x=${rocket.x.toFixed(1)}`,10,70
  )
  ctx.fillText(
    `actualX=${actualX.toFixed(1)}`,10,170
  )
*/


                            
  requestAnimationFrame(animateRocket);
}

animateRocket();

