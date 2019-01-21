/*9. Two Sum
Write a method that takes an array of numbers. If a
pair of numbers in the array sums to zero, return the
positions of those two numbers. If no pair of numbers
sums to zero, return null.*/

function two_sum(nums) {
  var zeroSums = [];

  for (var i = 0; i < nums.length; ++i){
    var temp = 0 - nums[i];

    if (temp >= 0 && nums[i]== temp){
      zeroSums.push(i,)
    }
      


  }//end of first for loop
  return zeroSums;
}//end of function

two_sum([1, 3, -1, 5]) // [[0, 2]]
two_sum([1, 3, -1, 5, -3]) // [[0, 2], [1, 4]]
two_sum([1, 5, 3, -4]) // null
