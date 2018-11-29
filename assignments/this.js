//===================== Window binding

// function greeting() {
//   "use strict"
//   console.log(this);
// }

// greeting();


//===================== Implicit (automatic) Binding

// Look to the left of the invocation of method and there you will find your this keyword context

const hobbit = {
    name: 'Samwise',
    food: 'taters',
    cook: function() {
      console.log(`${this.name} cooks some ${this.food}`);
    }
  }
  // hobbit is "this" for the cook method
  // hobbit.cook();
  
  //===================== Explicit (we control this) Binding
  
  const person = {
    name: 'Bob'
  }
  
  const skills = ['HTML', 'CSS', 'JS'];
  
  function introduce(skills1, skills2, skills3) {
    "use strict";
    console.log(`Hello! My name is ${this.name}, and I like to program in ${skills1}, ${skills2}, ${skills3}`);
  }
  
  // Call passes the this arg, and argument
  //introduce.call(person, skills);
  
  // Apply seperates the values of an argument into an array 
  //introduce.apply(person, skills);
  
  // Bind is "use this later!"
  // const useLater = introduce.bind(person,...skills);
  // useLater();
  
  
  //===================== New (building new objects) Binding
  
  // Constructor Function
  function CordialPerson(greeter){
    this.greeter = greeter;
    this.greeting = 'Hello';
    this.speak = function() {
      console.log(`${this.greeting}, ${this.greeter}`)
    }
  }
  
  
  // const jerry = {
  //   name: 'jerry'
  // }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  console.log(jerry);
  
  jerry.speak();
  newman.speak();