/*12. Sum All Numbers in a Range
Write a function that receives an array of two
numbers as argument and returns the sum of those
two numbers and all numbers between them.*/

function add_all(arr) {
  var start = Math.min(arr[0], arr[1]);
  var end = Math.max(arr[0], arr[1]);
  var total = 0;

  for (var i = start; i <= end; i++){
    total += i;
  }return total;
}

add_all([1, 4]) // 10
add_all([5, 10]) // 45
add_all([9, 10]) // 19
add_all([0, 0]) // 0
add_all([-1, 1]) // 0
