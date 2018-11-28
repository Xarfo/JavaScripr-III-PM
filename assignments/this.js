/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

function greeting() {

    //'use strict'
    console.log(this);
}

console.log(greeting());

// Principle 2

const aniga = {
    name: 'Abdul',
    class: 'CS13',
    speak: function () {
        console.log(`my name is ${this.name}`)
    }
}

aniga.speak();


// Principle 3

function FSW(name, location) {
    this.name = name;
    this.location = location;
    this.speak = function () {
        console.log(`We are ${this.name} in ${this.location} land`)
    }
}

var cohort = new FSW('Cohort16', 'Lambda');

cohort.speak();
cohort.name;


// code example for New Binding

// Principle 4

// code example for Explicit Binding