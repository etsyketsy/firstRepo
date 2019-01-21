/*Write a method that takes an integer n in; it should
return n*(n-1)*(n-2)*...*2*1. Assume n >= 0.

As a special case, factorial(0) == 1.*/

function factorial(n) {
  if (n < 0){
    return 'n must be > or = to 0';
  }else if (n == 0){
    return 1;
  }else if(n > 0){
      for (var i = n - 1; i >= 1; i--){
        n = n * i;
      }
    return n;
  }
}

factorial(5) // 120
factorial(4) // 24
factorial(0) // 1
factorial(-1) // "n must be > or = to 0"
