const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};


// // 이 함수는 어떤 객체에도 연결되지 않았지만 this 를 사용한다.
// function greet() {
//     return `Hello, I'm ${this.name}!`;
// }

// greet();
// greet.call(bruce);
// greet.call(madeline);





function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

// update.call(bruce, 1949, 'singer');
// // bruce 는 {name: "Bruce", birthYear: 1949, occupation: "singer"} 
// update.call(madeline, 1942, 'actress');
// // madeline 은 {name: "Madeline", birthYear: 1942, occupation: "actress"}





// const arr = [2, 3, -5, 15, 7];
// Math.min.apply(null, arr);
// Math.max.apply(null, arr);

// // Math.min 과 Math.max 가 this와 관계 없이 동작한다.

// // ES6의 확산연산자(...)를 사용해도 apply와 같은 효과를 얻는다.


// const newBruce = [1940, "martial artist"];
// update.call(bruce, ...newBruce);
// Math.min(...arr);
// Math.max(...arr);





const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
// bruce 는 {name: "Bruce", birthYear: 1904, occupation: "actor"}
updateBruce(madeline, 1274, "king");
// bruce 는 {name: "Bruce", birthYear: 1274, occupation: "king"}
// madeline 은 변하지 않는다.

// bind 함수의 동작을 영구적으로 바꾼다. 어려운 버그의 요인이 된다.
// bind에 매개변수를 넘기면 항상 그 매개변수를 받으면서 호출받는 새 함수를 만드는 효과가 있다.


const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
// bruce는 {name: "Bruce", birthYear: 1949, occupation: "singer, songwriter"}


