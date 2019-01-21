/*9. Two Sum
Write a method that takes an array of numbers. If a
pair of numbers in the array sums to zero, return the
positions of those two numbers. If no pair of numbers
sums to zero, return null.*/

function two_sum(nums) {
  var zeroSums = [];

  for (var i = 0; i < nums.length; ++i){
    for (var j = nums.length -1; j >=0; --j){
      if (nums[i] + nums[j] == 0){
        zeroSums.push([i, j]);
      }else{continue}
    }//end of second for loop

  }//end of first for loop
  return zeroSums;
}//end of function

two_sum([1, 3, -1, 5]) // [[0, 2]]
two_sum([1, 3, -1, 5, -3]) // [[0, 2], [1, 4]]
two_sum([1, 5, 3, -4]) // null
