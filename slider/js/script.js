'use strict';

const slide = document.getElementById('slider');

const imageCollection = [
  'i/airmax-jump.png',
	'i/airmax-on-foot.png',
	'i/airmax-playground.png',
	'i/airmax-top-view.png',
	'i/airmax.png'
];

let index = 0;
slide.src = imageCollection[index]

function imageChanger() {
	if (index < imageCollection.length) {
		index++;
		if (index === imageCollection.length) {
			index = 0;
		}
		slide.src = imageCollection[index];
	}
}

setInterval(imageChanger, 5000);

