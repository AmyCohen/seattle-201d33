'use strict';

// We need an array to hold our dogs
var allDogs = [];

// We need to access the table that is in the DOM
var dogTable = document.getElementById('dogs');

// Access the form so we can attach an event listener
var dogForm = document.getElementById('dog-form');

// We need a constructor to make our dog objects
function Dog(name, color, breed, nickname) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.nickname = nickname;
  allDogs.push(this);
}

// Render the dogs in the table
Dog.prototype.render = function () {
  var trElement = document.createElement('tr');

  var tdElement = document.createElement('td');
  tdElement.textContent = this.name;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = this.color;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = this.breed;
  trElement.appendChild(tdElement);

  tdElement = document.createElement('td');
  tdElement.textContent = this.nickname;
  trElement.appendChild(tdElement);

  dogTable.appendChild(trElement);
};

// We need to create our Dog instances
new Dog('Gary', 'White', 'Westie', 'Gare Bear');
new Dog('Charlotte', 'White', 'Westie', 'Goose');
new Dog('Ollivander', 'Tan', 'French Bulldog', 'Ollie');
new Dog('Buddy', 'Black', 'Labra-Doodle', '');
new Dog('Demi', 'Black and White', 'Border Collie', null);
new Dog('Izzy', 'Black', 'Lab-Pit', 'Porkchop');
new Dog('The Hound', 'Grey', 'Domestic Short-hair', 'Hound');

// Make the table header
function makeHeaderRow() {
  var headerTrElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Name';
  headerTrElement.appendChild(thElement);

  thElement = document.createElement('th');
  thElement.textContent = 'Color';
  headerTrElement.appendChild(thElement);

  thElement = document.createElement('th');
  thElement.textContent = 'Breed';
  headerTrElement.appendChild(thElement);

  thElement = document.createElement('th');
  thElement.textContent = 'Nickname';
  headerTrElement.appendChild(thElement);

  dogTable.appendChild(headerTrElement);
}

// It would be nice to have a single function that renders all of the individual dog rows...
function renderAllDogs() {
  for(var i in allDogs) {
    allDogs[i].render();
  }
}

// event listener's callback function
function addNewDog(event){
  event.preventDefault();
  console.log(event.target.dogBreed.value);

  var newName = event.target.dogName.value;
  var newColor = event.target.dogColor.value;
  var newBreed = event.target.dogBreed.value;
  var newNickname = event.target.dogNickname.value;

  new Dog(newName, newColor, newBreed, newNickname);

  dogTable.innerHTML = '';
  makeHeaderRow();
  renderAllDogs();
}

// add event listener
dogForm.addEventListener('submit', addNewDog);

// Now we need to call our functions
makeHeaderRow();
renderAllDogs();