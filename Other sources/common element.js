/*problem definition: we need to find the common element of the given  array without using nested arrays which is usually very time consuming, 
one solution is that we can use hash table or object to increase the time complexity of this */

function findCommon (array){
  let obj = {};
  let arr = [];
  for (let i =0; i <array.length; i++){
    if (!obj[array[i]]) {
      obj[array[i]] = 1
    } 
    else{
      arr.push(array[i]) 
    }
  }
  return arr;
}

findCommon([1,2,3,5,7,8,5,3,10])
