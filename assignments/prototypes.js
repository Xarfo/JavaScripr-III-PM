// Build my constructor
function Parent(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.location = attributes.location;
  this.phrase = attributes.phrase;
  this.rock = attributes.rock;
}// Parent

Parent.prototype.speak = function() {
  console.log(`${this.name} says: ${this.phrase}`);
}

Parent.prototype.doMath = function(a,b) {
  console.log(a + b);
}

// Child constructor
function Child(childAttributes) {
  // Binding of the this keyword to Parent
  Parent.call(this, childAttributes);
  this.toy = childAttributes.toy;
}
// Must be above any new methods for Child
// We are recreating the Child prototype to include everything in parent.
Child.prototype = Object.create(Parent.prototype);

// Only Child can see this method, Parent, cannot!
Child.prototype.play = function() {
  console.log(`${this.name} plays with their ${this.toy}`);
}


const pebbles = new Child({
  age: 2,
  name: 'Pebbles',
  location: 'Bedrock',
  phrase: 'MA MA',
  toy: 'Rock Doll'
});


const fred = new Parent({
  age: 35,
  name: 'Fred',
  location: 'Bedrock',
  phrase: 'Yabba Dabba Do',
  rock: 'rocks'
});

const willma = new Parent({
  age: 32,
  name: 'Willma',
  location: 'Bedrock',
  phrase: 'Fred!'
});



console.log(fred.age, fred.name, fred.location, fred.rock);
console.log(willma.age, willma.name, willma.location, willma.rock);

fred.speak();
fred.doMath(1,2);
willma.speak();

console.log(pebbles.location);
pebbles.speak();
pebbles.play();