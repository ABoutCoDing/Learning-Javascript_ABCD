// f();
// function f() {
//     console.log('f');
// }




f();    // ReferenceError: f is not defined
let f = function() {
    console.log('f');
}