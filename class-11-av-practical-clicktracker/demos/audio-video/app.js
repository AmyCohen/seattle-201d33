'use strict';

var seinfeld = document.getElementById('seinfeld');
var randomizer = document.getElementById('randomizer');

randomizer.addEventListener('click', function() {
  seinfeld.volume = Math.random();
});