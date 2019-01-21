/*11. Repeat a string
Repeat a given string (first argument) num times
(second argument). Return an empty string if num is
not a positive number.*/

function repeat_string_num_times(str, num) {
  var printStr = '';

  for (var i = 0; i < num; i++){
    printStr += str;
  }
  return printStr;
}


repeat_string_num_times("abc", 3) // 'abcabcabc'
repeat_string_num_times("abc", 1) // 'abc'
repeat_string_num_times("abc", 0) // ''
repeat_string_num_times("abc", -1) // ''
