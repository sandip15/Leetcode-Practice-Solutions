//------------------------leetcode problem using different kinds of loops in javascript----------------

// Question: leetcode problem number 771(easy)
/* we're given with two strings, J representing the types of stones that are jewels, and S representing the stones you have. 
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, 
so "a" is considered a different type of stone from "A". */

let numJewelsInStones = function (j,s){
  let stoneArray = s.split("")
  let jewelArray = j.split("")
  let counter = 0;
  
// question: using ES6 syntax rewrite the above function 
  stoneArray.forEach((e1)=>{
    jewelArray.forEach((e2)=>{
      if (e1 === e2) counter++;
    })
  })
  return counter; 
  
//approach 01: using (forEach loop) to iterate over the elements   
stoneArray.forEach(function(e1){
  jewelArray.forEach(function(e2){
    if (e1 === e2) counter++
  })
})
return counter;

//approach 02: using a (for loop) to iterate over the elements 
for (let i=0 ; i<stoneArray.length ; i++){
  for (let j=0 ; j<jewelArray.length ; j++){
    if (stoneArray[i] === jewelArray[j]){
      counter++
    }
  }
}
return counter;
}

numJewelsInStones('dabrghha','saabbrree')
