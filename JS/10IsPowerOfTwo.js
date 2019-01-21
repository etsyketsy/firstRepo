/*Write a method that takes in a number and returns true
if it is a power of 2. Otherwise, return false. You may
want to use the % modulo operation. 5 % 2 returns the
remainder when dividing 5 by 2; therefore, 5 % 2 == 1.
In the case of 6 % 2, since 2 evenly divides 6 with no
remainder, 6 % 2 == 0.*/

function is_power_of_two(num) {

  for (var i = 0; i <= num; i++){
    if (Math.pow(2, i) == num){
      return true;
    }
  }return false;

}


is_power_of_two(8) // true
is_power_of_two(16) // true
is_power_of_two(32) // true
is_power_of_two(12) // false
is_power_of_two(24) // false
