

import rocketUrl from './rocket.png';

let assetDiv : HTMLDivElement = document.querySelector('#assets');

assetDiv.style.display = 'none';

export let rocketImage = document.createElement('img');
rocketImage.src = rocketUrl;
assetDiv.appendChild(rocketImage);

