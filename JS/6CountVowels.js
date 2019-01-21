/*6. Count Vowels
Write a method that takes a string and returns the number
of vowels in the string. You may assume that all the
letters are lower cased. You can treat “y” as a consonant.*/

function count_vowels(string) {
  var vowelCount = 0;
  var fixedStr = string.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < fixedStr.length; i++){
    for (var j = 0; j < vowels.length; j++){
      if (fixedStr[i] == vowels[j]){
        vowelCount += 1;
      }
    }
  }return vowelCount;
}

count_vowels("alphabet") // 3
count_vowels("Propulsion Academy") // 7
count_vowels("AaaAa") // 5
count_vowels("fly") // 0
