// const fs = require('fs');

// fs.writeFile('hello.txt', 'hello from Node!', function(err) {
//     if (err) return console.log('Error writing to file.');
// });


// const fs = require('fs');

// fs.writeFile(__dirname + '/hello.txt', 
//         'hello from Node!', function(err) {
//             if(err) return console.error('Error writing to file.');
//         }
// )



const fs  = require('fs');
const path = require('path');

// fs.writeFile(path.join(__dirname, 'hello.txt'),
//     'hello from Node!', function(err) {
//         if (err) return console.error('Error writing to file');
// });




fs.writeFileSync(path.join(__dirname, 'hello.txt'), 'hello from Node!');
const data = fs.readFileSync(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'});        // "hello from Node!"

try {
    fs.writeFileSync(path.join(__dirname, 'hello.txt'), 'hello from Node!');
} catch (err) {
    console.error('Error writing file.');
}