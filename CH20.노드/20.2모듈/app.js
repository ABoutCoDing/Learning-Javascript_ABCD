// const amanda_calculate = require('./amanda.js');
// const tyler_calculate = require('./tyler.js');

// console.log(amanda_calculate(1, 2, 5));     // 31
// console.log(tyler_calculate(2));            // 33.510321638291124



// const geometricSum = require('./amanda.js');
// const sphereVolume = require('./tyler.js');

// console.log(geometricSum(1, 2, 5));         // 31
// console.log(sphereVolume(2));               // 33.510321638291124



const amanda = require('./amanda.js');
console.log(amanda.geometricSum(1, 2, 5));              // logs 31
console.log(amanda.quadraticFormula(1, 2, -15));        // logs [ 3, -5 ]