/*14. Return Largest Numbers in Arrays
Write a function that receives an array with four
nested array. The function returns an array
consisting of the largest number from each provided
sub-array.*/

function largest_of_four(arr) {
  var largestNums = [];

  for (var i = 0; i < arr.length; i++){
    largestNums.push(Math.max(arr[i][0], arr[i][1], arr[i][2], arr[i][3],));
  }return largestNums;
}

largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // [27,5,39,1001]
