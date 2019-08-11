//problem: given two sorted arrays merge them together into one array keeping it sorted.

var addElement = function (arr1,arr2){
  const mergedArray =[];

  let arr1item = arr1[0];
  let arr2item = arr2[0];
  let i =1;
  let j = 1;

	while (arr1item || arr2item){
    
		if (!arr2item || arr1item<arr2item){
    //need to check always so that the while loop does not become undefined 
			mergedArray.push(arr1item)
      arr1item = arr1[i]
			i++;
		}else{
			mergedArray.push(arr2item)
      arr2item = arr2[j]
			j++;
		}
	}
  return mergedArray;
}
addElement([0,3,4,31],[4,6,30])
