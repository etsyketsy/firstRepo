/*Write a method that will take in a number of minutes,
and returns a string that formats the number into hours:minutes.*/

function time_conversion(minutes) {
  var min = minutes % 60;
  var hours = minutes - min;
  hours = hours/60;

  if (hours < 10){
    hours = '0' + hours;
  }

  if (min < 10){
    min = '0' + min;
  }
  return hours + ':' + min;
}

time_conversion(155) // "02:35"
time_conversion(61) // "01:01"
time_conversion(60) // "01:00"
time_conversion(59) // "00:59"
