var userName = 'Allie';

// var faveNum = prompt('What is your favorite number?');

// typeof(faveNum);

// console.log(faveNum);
// console.log('faveNum before parse', typeof(faveNum));
// faveNum = parseInt(faveNum);
// console.log('faveNum after parse', typeof(faveNum));
// ARRAYS
// collection of similar elements
// index starts at 0

// var myArray = [1, 2, 3];
// var secondArray = [true, false, true];
// var thirdArray = ['string1', 'string2'];

var arrayOfDogs = ['Gary', 'Charlotte', 'Demi', 'Bird', 'Mr. Darcy'];

arrayOfDogs.length;
arrayOfDogs[3] = 'Not Bird';

arrayOfDogs.push('Rosie');
// console.log('after push', arrayOfDogs);
// console.log('before', arrayOfDogs.length);
var lastDog = arrayOfDogs.pop();
// console.log('after', arrayOfDogs.length);

arrayOfDogs.shift();
// console.log('after shift', arrayOfDogs.length);
// console.log(arrayOfDogs);

arrayOfDogs.unshift('Gabe', 'Kitty');
console.log(arrayOfDogs);