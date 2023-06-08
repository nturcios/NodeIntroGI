const fs = require('fs');

fs.readFile('Planets.txt', 'utf8', (error, content) => {
    if (error) {
        console.log(error);
    }
    console.log(content);
});