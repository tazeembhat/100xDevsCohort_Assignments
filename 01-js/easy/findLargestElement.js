/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length === 0){
        return ;
    }
    let ans = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i<numbers.length; i++){
        ans = Math.max(ans, numbers[i]);
    }
    return ans;
}

module.exports = findLargestElement;