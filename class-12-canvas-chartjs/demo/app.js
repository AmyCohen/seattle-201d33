'use strict';

// array to store instances of the Goat constructor
Goat.allGoats = [];

// constructor function
function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Goat.allGoats.push(this);
}

// make new Goat instances
new Goat('Cruisin goat', 'img/cruisin-goat.jpg');
new Goat('Flower goat', 'img/flower-goat.jpg');
new Goat('Goatogenic', 'img/goatogenic.jpg');
new Goat('Jumping goat', 'img/jumping.jpg');
new Goat('Kissing goat', 'img/kissing-goat.jpg');
new Goat('Pushy goat', 'img/pushy-goat.jpg');
new Goat('Sassy goat', 'img/sassy-goat.jpg');
new Goat('Smiling goat', 'img/smiling-goat.jpg');
new Goat('Sweater goat', 'img/sweater-goat.jpg');
new Goat('Goat with tongue out', 'img/tongue.jpg');
new Goat('Underbite goat', 'img/underbite.jpg');

// randomly display two pictures
function randomGoat() {
  // generate two random indices
  var randomLeft = Math.floor(Math.random() * Goat.allGoats.length);
  var randomRight = Math.floor(Math.random() * Goat.allGoats.length);
}

// render two images on page load
randomGoat();