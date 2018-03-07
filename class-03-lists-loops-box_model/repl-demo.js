// FOR LOOPS
// for(start; condition; increment) {
//   code to execute;
// }

// perform the same action a specific number of times
for(var i = 0; i < 3; i++) {
  console.log(i);
  console.log('I\'m in a for loop!');
}
// console.log(i);

// iterate and increment by various numbers
var i = 0;
for(i = 0; i < 15; i+=3) {
  console.log(i);
  console.log('I\'m in a for loop!');
}

// console.log(i);

// iterate over every element in an array and apply the same code 
var myFoodArray = ['pizza', 'sushi', 'homemade reeses', 'qdoba'];
var foodGuess = prompt('Can you guess one of my favorite foods?').toLowerCase();

for(var i = 0; i < myFoodArray.length; i++){
  console.log(i);
  if(myFoodArray[i] === foodGuess) {
    console.log('Correct!');
    break;
  } else {
    console.log('Nope!');
  }
}


// WHILE LOOP
// might never run 

// while(condition is met) {
//   do this stuff;
// }

var counter = 0;
var flag = true;

while(counter < 3 || flag === true) {
  counter++;
  console.log('The counter is: ' + counter);
}

// DO WHILE LOOP
// run at least once 

// do {
//   whatever code you want to run;
// } while(condition is met)

// do {
//   compare user's guess to an element in the array
// } while(user did not guess correctly);