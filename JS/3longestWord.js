/*3. Longest Word
Write a method that takes in a string. Return the longest
word in the string. You may assume that the string contains
only letters and spaces. You may use the String split method
to aid you in your quest.*/

function longest_word(sentence) {
  words = sentence.split(' ');
  var longest = words[0];
  for (var i = 0; i < words.length; i++){
    if (words[i].length > longest.length){
      longest = words[i];
    }
  }return longest;
}

longest_word("This is an amazing test") // "amazing"
longest_word("Laurent Colin") // "Laurent"
longest_word("Propulsion 123") // "Propulsion"
