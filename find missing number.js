 /* problem:  Find the first missing positive integer from a given array
 
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
