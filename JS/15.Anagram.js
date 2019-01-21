/*15. Is it an anagram?
Write a JavaScript function to check if a word is an anagram or not.*/

function isAnagram(test, original) {

  var strA = test.toLowerCase().split('').sort().join('');
  var strB = original.toLowerCase().split('').sort().join('')

  return (strA === strB);
}

isAnagram("foefet", "toffee") // true
isAnagram("Buckethead", "DeathCubeK") // true
isAnagram("Twoo", "WooT") // true
isAnagram("dumble", "bumble") // false
isAnagram("ound", "round") // false
isAnagram("apple", "pale") // false
