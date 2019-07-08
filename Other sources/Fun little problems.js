//problem 01. Simplify the following code  with es6 enhanced object literals

const newFunction = function literal(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function(){
      alert(firstName + " " + lastName)
      return 
    }
  }
}

//**************Solution *******************
const newFunction = (firstName,lastName) => {
  return {
    firstName,
    lastName,
    fullName(){
      console.log(firstName + " " +lastName)
    }
  }
}

newFunction("William", "Imoh").fullName()

//2. Condense this to 8 lines with destructuring
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const firstName = newObject.firstName;
const lastName = newObject.lastName;
const destination = newObject.destination;
const occupation = newObject.occupation;

const {firstName,lastName,destination,occupation,spell} = newObject


console.log(firstName, lastName, destination, occupation,spell)

// 4. Combine these arrays with array spreading
const west = ["Will", "Chris", "Sam", "Holly"]

const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = west.concat(east)
const combined = [...west,...east]
console.log(combined)


//5. Reverse a given string 
function reverseString(str) {
  return str.split("").reverse().join("")
}

reverseString("hello");

//6. find the length of the longest word in a string 

function findLongestWordLength(str) {
  let splt = str.split(" ");

  let counter = 0;
  for (let i=0 ; i<splt.length ; i++){
    if (splt[i].length >= counter){
      counter = splt[i].length;
    }
  }
  return counter; 
}

//7.  Return an array containing the Largest Numbers from each sub array.
function largestOfFour(arr){
  var result = [];
  for (var i=0 ; i<arr.length; i++){
    var maxNum = arr[i][0];
    for (var j=1; j<arr[i].length; j++){
      if (arr[i][j] > maxNum){
        maxNum = arr[i][j];
      }
    }
    result[i] = maxNum;
  }
  return result;
}

  largestOfFour([[4, 5, 23, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
  //8. repeat the given strings for given n  times
function repeatStringNumTimes(str, num) {
  // repeat after me
  newstr = '';
  while (num>0){
    newstr += str;
    num -- ;
  }
  return newstr;
}

repeatStringNumTimes("abc", 7);
