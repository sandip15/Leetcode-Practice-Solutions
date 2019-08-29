// How the inheritence works in javascript
// Prototype : Prototype is a property that every function you create in javasctipt has, that points to an object.
/* how to inherit properties from parent function
  to inherit properties of the parent function we need to use the call function 
  to inherit the methods of the parent function we need to use the object.create to link prototypes of parent and child.
*/

function Animal(name,type){
  this.name = name;
  this.type = type;
  this.shout = function (){
    console.log("this is barking!!")
  }
}
Animal.prototype.sing = function (){
  console.log(" i can sing also ")
}

function Dog(name,type){
  Animal.call(this,name,type);
}

Dog.prototype = Object.create(Animal.prototype)
let pet = new Dog("max",'mixed');
pet.shout()
pet.sing()
