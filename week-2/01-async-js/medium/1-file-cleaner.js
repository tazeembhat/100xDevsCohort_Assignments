/*File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```
After the program runs, the output should be
```
hello world my name is raman
```
 */

const fs = require("fs");

let content = "";
fs.readFile("file.txt", "utf-8", (err, data) => {
    content = data.replace(/\s+/g, ' ');

    fs.writeFile("file.txt", content, (err)=>{
        if(err){throw err;}
        console.log("Data in file modified!");
    })
});