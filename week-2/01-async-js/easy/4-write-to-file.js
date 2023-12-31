// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
let s = "Hello World!, Learning JavaScript.";
fs.writeFile("text.txt", s, (err)=>{
    if(err){throw new err;}
    console.log("File Saved!");
});

console.log("Writing the file");