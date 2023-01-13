

import satelliteUrl from './satellite.png';

let assetDiv : HTMLDivElement = document.querySelector('#assets');

assetDiv.style.display = 'none';

export let satelliteImage = document.createElement('img');
satelliteImage.src = satelliteUrl;
assetDiv.appendChild(satelliteImage);

