/* Write a method that will take a string as input, and
return a new string with the same letters in reverse order.*/

function reverse(string) {
	var newStr= [''];
  for (var i = string.length - 1; i >=0; i--){
    newStr += string[i];
  }
  return newStr;
}

reverse("Propulsion Academy") // "ymedacA noisluporP"
reverse("Hello") // "olleH"
reverse("abcd") // "dcba"
