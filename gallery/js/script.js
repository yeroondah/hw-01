'use strict';

const img = document.getElementById('currentPhoto');
const next = document.getElementById('nextPhoto');
const prev = document.getElementById('prevPhoto');
const photoCollection = [
  'i/breuer-building.jpg',
  'i/guggenheim-museum.jpg',
  'i/headquarters.jpg',
  'i/IAC.jpg',
  'i/new-museum.jpg'
];
let index = 0;

window.onload = function() {
	img.src = photoCollection[0];
	index++;
}

next.onclick = function() {
	img.src = photoCollection[index];
	index++;

	if(index >= photoCollection.length) {
		index = 0;
	}
}

prev.onclick = function() {
	img.src = photoCollection[index];
	index--;

	if(index < 0) {
		index = photoCollection.length - 1;
	}
}


