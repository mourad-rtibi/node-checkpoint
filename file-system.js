const fs = require('fs');

// Write to file
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read from file
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);