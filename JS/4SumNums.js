/*4. Sum Nums
Write a method that takes in an integer num and
returns the sum of all integers between zero and num,
up to and including num.*/

function sum_numbs(num) {
  var sum = num;
  for (var i = 0; i < num; i++){
    sum += i;
  }return sum;
}

sum_numbs(6) // 21
sum_numbs(1) // 1
sum_numbs(0) // 0
