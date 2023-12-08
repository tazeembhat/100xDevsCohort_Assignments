/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isCharLetter(char){
  return char.toLowerCase() !== char.toUpperCase();
}

function isPalindrome(str) {
  let newStr = str.toLowerCase();
  let i = 0;
  let j = str.length-1;
  while(i < j){
    if(isCharLetter(newStr[i]) && isCharLetter(str[j])){
      if(newStr[i] !== newStr[j]){
        return false;
      }
      i++;
      j--;
    }
    else if(isCharLetter(str[i])){
      j--;
    }
    else{
      i++;
    }
  }
  return true;
}

// console.log(isPalindrome("Able, was I ere I saw Elba!"));
module.exports = isPalindrome;
