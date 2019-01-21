/*8. Most Letters
Write a method that takes a string in and returns true
if the letter “z” appears within three letters after an “a”.
You may assume that the string contains only lowercase letters.*/

function nearby_az(string) {
  var stringArray = string.split('');
  var aCheck = false;
  var zCheck = false;
  var aSpot = 0;
  var zSpot = 0;

  //check if a is present
  for (var i = 0; i < stringArray.length; ++i){
    if (stringArray[i] == 'a'){
      aCheck = true;
      aSpot = i;
    }
  }

  //check if z is also present
  for (var j = 0; j < stringArray.length; ++j){
    if (stringArray[j] == 'z'){
        zCheck = true;
        zSpot = j;
    }
  }

//check distance between a and z based on index
  if (aCheck && zCheck){
    var distance = 0;
    if (aSpot > zSpot){
      distance = aSpot - zSpot;
    }else if (aSpot < zSpot){
      distance = zSpot - aSpot;
    }

    //decide if the string qualifies based on distance
    if (distance <= 3){
      return true;
    }
    else{
      return false;
    }
  }else{
    return false;
  }


}//end of function

nearby_az("abbbz") // false
nearby_az("abz") // true
nearby_az("abcz") // true
nearby_az("abba") // false
