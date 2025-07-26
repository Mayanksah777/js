const fs = require('fs');

fs.readFile("data.txt", "utf-8", function(err, data) {
    // if (err) {
    //     console.error("Error reading file:", err);
    //     return;
    // }
    console.log(err);
    console.log(data);
});