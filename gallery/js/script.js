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

img.src = photoCollection[index]

next.onclick = function() {
	index++;
	if(index >= photoCollection.length) {
		index = 0;
	}
	img.src = photoCollection[index];
}

prev.onclick = function() {
	index--;
	if(index < 0) {
		index = photoCollection.length - 1;
	}
	img.src = photoCollection[index];
}


