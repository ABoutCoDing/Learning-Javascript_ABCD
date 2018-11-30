// 익명함수 (anonymous function) : 함수의 식별자가 없다.
// 함수 표현식 (function expression)
// 즉시 호출 함수 표현식 (IIFE, immediately invoked function expression)
// const f = function() {
//     // ..
// }


// const g = function f() {
//     // ...
// }


const g = function f(stop) {
    if(stop) console.log('f stopped');
    f(true);
};
g(false);
console.log(g(false));