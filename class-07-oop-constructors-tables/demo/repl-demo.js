'use strict';

var student = {
  course: '201d33',
  enrolled: true,
  instructors: 'Allie and John',
  firstName: '',
  lastInitial: '',
  homeTown: '',
  introduction: function () {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastInitial + 'and I am from ' + this.homeTown + '.';
  }
}

// SYNTAX OF A CONSTRUCTOR FUNCTION 
// function ConstructorName(parameter1, parameter2, parameter3) {
//   this.property1 = parameter1;
//   this.property2 = parameter2;
//   this.property3 = parameter3;
// }

function Student(firstName, lastInitial, homeTown) {
  this.course = '201d33';
  this.enrolled = true;
  this.instructors = 'Allie and John';
  this.first = firstName;
  this.last = lastInitial;
  this.home = homeTown;
}

// var intro = max.introduction();
// console.log(intro);
var rhiannon = new Student('Rhiannon', 'M', 'Deer Park');

Student.prototype.introduction = function () {
  return 'Hi, my name is ' + this.first + ' ' + this.last + 'and I am from ' + this.home + '.';
};

var max = new Student('Max', 'M', 'Deer Park');

max.introduction();
rhiannon.introduction();