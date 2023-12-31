// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript.
// There is a hint at the bottom of the file if you get stuck

let s = 0;
function timer(){
    console.log(++s);
    if(s !== 10){
        setTimeout(timer, 1000);
    }
}

timer();



































































// (Hint: setTimeout)