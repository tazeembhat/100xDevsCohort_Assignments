/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let newStr1 = str1.toLowerCase();
    let newStr2 = str2.toLowerCase();
    const arr = new Array(128).fill(0);
    for(let i = 0; i<newStr1.length; i++){
        arr[newStr1.charCodeAt(i)]++;
    }
    for(let i = 0; i<newStr2.length; i++){
        arr[newStr2.charCodeAt(i)]--;
    }

    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== 0){
            return false;
        }
    }
    return true;
}

// ans = isAnagram("keen", "knEe");
// console.log(ans);
module.exports = isAnagram;