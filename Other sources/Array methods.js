// Question: taking a number as an input we need to reverse the digits of that given number ....

var jh = 12345;
console.log(jh.toString().split("").reverse()); // converting the number to string to use reverse method

//replace all the "a"s by x
var jj = "my name is Sandip";
console.log(jj.replace(/a/gi , 'x'));  // using regex expression, here g stands for global 

//replace all the digits in the phone number with X
var phn = "my phone number is 0086-18302177036"
console.log(phn.replace(/[0-9]/gi, 'X'));

// shifting and unshifting array methods in js
// for inserting at the beggining of the array we use the unshift method
var arr = [4,6,3,74,35,77];

console.log(arr.shift()); // for removing from the front of the array, here it removes 4
console.log(arr);
arr.unshift(12); // inserts 12 at the head of the array
console.log(arr);

//differnt sorting methods in js

arr.sort(function(a,b){
  return a-b ;
})
arr.sort(function(a,b){
  return b-a;
})

// Question: given two arrays need to return the common elements between those two arrays

array1 = [10, 20, 4, 14, 4,22,22,2,22]
array2 = [10, 2, 12, 4, 5,23,100,23,5]

var ar1 = new Set(array1);
var ar2 = new Set(array2);
console.log(ar1);
console.log(ar2);

function compare (arr1, arr2){
  var arr3 =[];

  arr1.forEach(function(e1){
    arr2.forEach(function(e2){
      if (e1 == e2){
        arr3.push(e1);
      }
    })
  })
  return arr3;
}

// re-writing es5 function using es6 syntax

function compare (arr1, arr2){
  const arr3 = [];

  arr1.forEach((e1)=>{
    arr2.forEach((e2)=>{
      if (e1 == e2){
        arr3.push(e1)
      }
    })
  })
  return arr3;
}

//------------------------------------*******----------------------------------------
//flatteing (converting a two dimensional array into one dimensional one ) method of array
// unfortunately this method works only with one dimensional arrays, for multidimensional arrays follow the next approach
var arrays = [
  ["$6"],
  ["$12"],
  ["$25"],
  ["$25"],
  ["$18"],
  ["$22"],
  ["$10"]
];

var mer = [].concat.apply([],arrays)
//or mer = [].concat(...arrays)   //using es6 
console.log(mer)


//------------------------------------*******----------------------------------------
// this method works with the multidimensional arrays
//flatteing a multi dimensional array

function flatten(array){
  return array.reduce(function (presentElement,nextElement){
    return presentElement.concat(Array.isArray(nextElement)? flatten(nextElement) : nextElement);
  },[])
}
var array = [1,2,[3,4],[5,[6,7]]]
flatten(array)

