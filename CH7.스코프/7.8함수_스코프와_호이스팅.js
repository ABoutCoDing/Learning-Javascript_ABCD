// let var1;
// let var2 = undefined;
// var1;
// var2;
// // undefinedVar;   // ReferenceError: undefinedVar is not defined


// x;              // ReferenceError: x is not defined
// let x = 3;


// 원래코드
// x;
// var x = 3;
// x;

// 자바스크립트의 해석 방법
// var x;
// x;
// x = 3;
// x;




// // 원래코드
// if (x !== 3){
//     console.log(y);
//     var y = 5;
//     if (y === 5) {
//         var x = 3;
//     }
//     console.log(y);
// }
// if (x===3) {
//     console.log(y);
// }


// 자바스크립트가 해석한 코드
// var x;
// var y;
// if ( x!==3 ){
//     console.log(y);
//     y = 5;
//     if (y===5) {
//         x = 3;
//     }
//     console.log(y);
// }
// if (x===3) {
//     console.log(y);
// }






// 원래 코드
// var x = 3;
// if(x===3) {
//     var x = 2;
//     console.log(x);
// }
// console.log(x);


// 자바스크립트가 해석한 코드
// var x;
// x = 3;
// if (x===3) {
//     x = 2;
//     console.log(x);
// }
// console.log(x);
