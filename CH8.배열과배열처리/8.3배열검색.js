const o = {name: "Jerry"};
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
arr.indexOf(5);                     // 1
arr.lastIndexOf(5);                 // 5
arr.indexOf("a");                   // 2
arr.lastIndexOf("a");               // 2
arr.indexOf({name: "Jerry"});       // -1
arr.indexOf(o);                     // 3
arr.indexOf([1, 2]);                // -1
arr.indexOf("9");                   // 7
arr.indexOf(9);                     // -1

arr.indexOf("a", 5);                // -1
arr.indexOf(5, 5);                  // 5
arr.lastIndexOf(5, 4);              // 1
arr.lastIndexOf(true, 3);           // -1



// const arr = [{id: 5, name: "Judith"}, {id: 7, name: "Francis"}];
// arr.findIndex(o => o.id === 5);
// arr.findIndex(o => o.name === "Francis");
// arr.findIndex(o => o === 3);
// arr.findIndex(o => o.id === 17);



// const arr = [{ id:5, name: "Judith"}, {id:7, name: "Francis"}];
// arr.find(o => o.id === 5);
// arr.find(o => o.id === 2);




// const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
// arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)));




// class Person {
//     constructor(name) {
//         this.name = name;
//         this.id = Person.nextId++;
//     }
// }
// Person.nextId = 0;
// const jamie = new Person("Jamie"),
//     juliet  = new Person("Juliet"),
//     peter  = new Person("Peter"),
//     jay = new Person("Jay");
// const arr = [jamie, juliet, peter, jay];

// // 옵션1: ID를 직접 비교하는 방법
// arr.find(p=>p.id===juliet.id);

// // 옵션2: "this" 매개변수를 이용하는 방법
// arr.find(function(p) {
//     return p.id === this.id
// }, juliet);





// const arr = [5, 7, 12, 15, 17];
// arr.some(x => x%2 === 0);
// arr.some(x => Number.isInteger(Math.sqrt(x)));



// const arr = [4, 6, 16, 36];
// arr.every(x => x%2 === 0);
// arr.every(x => Number.isInteger(Math.sqrt(x)));