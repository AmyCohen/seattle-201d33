function clue(location, weapon, person) {
  return 'The murder was committed in the ' + location + ' with the ' + weapon + ' by ' + person + '!';
}

// console.log(clue('kitchen', 'butcher knife', 'Allie'));
// console.log(clue(1, 2, 3));

function math(num1, num2) {
  var add = num1 + num2;
  var subtract = num1 - num2;
  var multiply = num1 * num2;
  var divide = num1 / num2;
  return [add, subtract, multiply, divide];
}

math(12, 5)[2];