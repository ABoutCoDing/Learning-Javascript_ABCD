const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'hello.txt'), function(err, data) {
    if (err) return console.error('Error reading file.');
    console.log('Read file contents:');
    console.log(data);
});
// Read file contents:
// <Buffer 68 65 6c 6c 6f 20 66 72 6f 6d 20 4e 6f 64 65 21>



const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'}, function(err, data) {
    if (err) return console.error('Error reading file.');
    console.log('File contents:');
    console.log(data);
});




// const data = fs.readFileSync(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'});

// try {
//     fs.writeFileSync(path.join(__dirname, 'hello.txt'), 'hello from Node!');
// } catch (err) {
//     console.error('Error writing file.')
// }