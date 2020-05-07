 /* Question: Find out the first missing positive integer from a given array
 
 * @param {number[]} nums
 * @return {number}
 */
 
var firstMissingPositive = function(nums) {
   var first = 1;
   nums = nums.sort();     // sorting the array
   highestNum = Math.max(...nums)
   for (var i=0,k=1; i<highestNum; i++){
     if (nums[i]>k){
       return k;
     }else{
       k++;
     }
   }
};

var nums = [7,8,1,9,11,12]
firstMissingPositive(nums)


//----------------------alternative approach ----------------------

let missingNumber = function (arr){
  arr = arr.sort();      // sorting the array 
  for (let i=0 ;i<arr.length ; i++){
    if(arr[i]+1 !== arr[i+1]){
      return arr[i]+1
    }
  }
}

missingNumber([7,4,8,3,2,1,8])   // returns 5
