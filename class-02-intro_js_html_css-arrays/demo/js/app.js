'use strict';

// IF/ELSE

// PSEUDOCODE
// if(some condition is met) {
//   do this 
// } else {
//   do something different
// }

var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));

if(petQuestion === 2) {
  alert('correct!');
} else {
  alert('nope!');
}

var myAge = prompt('Do you think I\'m older than 30? Please enter "yes" or "no"').toLowerCase();

myAge = myAge.toLowerCase();
// 'yes', 'YES', 'Y', 'y', YeS, NO, no, No, nO, n, N, nope, nah, yep

if(myAge.toLowerCase() === 'yes') {
  alert('That is correct!');
} else {
  alert('No, I am older than 30!');
}

if(first condition) {
  do this;
} else if(second condition) {
  do this;
} else {
  do this;
}