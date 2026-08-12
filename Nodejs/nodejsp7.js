
const fs = require('fs');
 
console.log("\nFile Contents of file before append:",
    fs.readFileSync("f1.txt", "utf8"));

fs.appendFile("f1.txt", "World", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        // Get the file contents after the append operation 
        console.log("\nFile Contents of file after append:",
            fs.readFileSync("f1.txt", "utf8"));
    }
}); 