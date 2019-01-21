/*7. Palindrome
Write a method that takes a string and returns true if it is
a palindrome. A palindrome is a string that is the same whether
written backward or forward. Assume that there are no spaces;
only lowercase letters will be given.*/

function palindrome(string) {
  var fixedStr = string.toLowerCase();
  var newString = [];

//create array with letters in reverse order
  for (var i = (fixedStr.length - 1); i >= 0; --i ){
    newString.push(fixedStr[i]);
  }

// change reversed string back into a string for comparison
  newString = newString.join('');

//compare original and reversed version
  if (newString == fixedStr){
    return true;
  }else{
    return 'Woops! not a palindrome. :(';
  }
}

palindrome("ABBA") // true
palindrome("AbbA") // true
palindrome("abcd") // false
