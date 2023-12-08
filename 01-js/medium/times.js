/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calcSum(){
    let ans = 0;
    for(let i = 0; i<10000; i++){
        ans += i;
    }
    return ans;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

console.log(calcSum());

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();
console.log("Time Taken to Calculate: ", afterTimeInMs-beforeTimeInMs);