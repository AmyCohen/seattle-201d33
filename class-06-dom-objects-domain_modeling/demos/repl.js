/*
    John
      facial hair - beard
      vision - impaired
      hairColor - null
      height - not so much
      weight - too much
      -> TypeError
      -> code
      -> play bass
      -> walk
      -> drive
      -> sleep
      family
        spouse : Cathy
        kiddos : Zach, Allie
        pets: Rosie
*/

var person = 'John'
var age = 33;
var awesome = true;
var listOfPeople = ['john', 'cathy', 'zach', 'allie'];

var zach = {
    name: "Zach",
    facialHar: false,
    vision: "impaired"
};

var allie = {
    name: "Allie",
    facialHar: false,
    vision: "perfect"
};

var john = {
    name: "John",
    facialHar: "beard",
    vision: "impaired",
    hairColor: null,
    height: "5'8\"",
    weight: 200,
    family: {
        spouse: "Cathy",
        kids: [zach, allie],
        pets: ["Rosie"]
    },
    code: function(text) {
        console.log(text);
    }
};

// the whole enchilada
console.log("john", john);

// Using dot notation to get one property
console.log("john.height", john.height);


// Addressing object properties as a hash instead of with dot notation

var thing = "vision";
console.log("john.vision", john.vision);
console.log("john[\"vision\"]", john["vision"]);
console.log("john[thing]", john[thing]);

// Why do this?  Suppose you only have the names of the properties of an 
// object in a variable. You can't address a property using dot notation if the
// property name is contained in a variable.

var props = ['vision', 'height', 'width'];
function renderJohn(properties) {
    for( var i=0; i<properties.length; i++ ) {
        var prop = properties[i];
        console.log('dynamic property', prop, john[prop]);
    }
}
renderJohn(props);

// How deep can we go with dot notation?
console.log('john.family.spouse', john.family.spouse);
console.log('john.family.kids[1]', john.family.kids[1]);
    
// Call a method on an object:
john.code("hello world");


// Functions vs Methods...
// john.code() is a method on the object
// function code() below is a function within the application.
// they can do the same exact thing, it's all about ownership and scope.
function code(text) {
    console.log(text);
}