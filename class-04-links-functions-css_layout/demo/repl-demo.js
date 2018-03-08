function greeting(name) {
  console.log('Hello, ' + name + '!');
}

greeting('John');
greeting('Michael');
greeting('Catherine');
greeting('Andrew');

function variableScope() {
  var dog = 'Charlotte';
  console.log('inside of function', dog);
}

variableScope();
console.log('outside of function', dog);

function secondScope(dogParam) {
  dogParam = 'Gary';
  console.log('inside', dogParam);
}

var dog = 'Charlotte';
console.log('outside', dog);
secondScope(dog);
console.log('outside 2', dog);
console.log('dogParam outside', dogParam);