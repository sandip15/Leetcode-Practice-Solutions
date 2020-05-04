// basic concept: important question to be asked during an interview : How the inheritence works in javascript ：
// Prototype : Prototype is a property that every function you create in javasctipt has, that points to an object.

//Basics :  implement one sample example for understanding how inheritence works in javascript

function Animal(name,energy){
  let animal = Object.create(Animal.prototype)
  animal.name = name;
  animal.energy = energy;
  return animal;
}

/* when we use the above method with creating another object and then returning that object, we instantiate 
the new object by the following way: */
const leo = Animal ('leo',10);
const snoop = Animal('snoop',12);

function Animal (name,energy){
  this.name = name;
  this.energy = energy;
}
// when we use the keyword 'new' during instantiating a new object then we follow the above method.
//(here we dont have to create an object and then return that object like the previous one, the new keyword will take care of the rest)
const leo = new Animal ("leo",10);
const snoop = new Animal ('snoop',12);


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
  Animal.call(this,name,type); //to inherit properties of the parent function we need to use the call function 
}

Dog.prototype = Object.create(Animal.prototype) //to inherit the methods of the parent function we need to use the
                                                //object.create to link the prototype, here no need to create a separate object like the previous one.
let pet = new Dog("max",'mixed');
pet.shout()
pet.sing()
