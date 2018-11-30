// // 함수 바디 안에는 특별한 읽기 전용 값인 this가 있다.
// const o = {
//     name: 'Wallace',
//     speak() {return `My name is ${this.name}`},
// }

// o.speak();


// const speak = o.speak;
// speak === o.speak;      // true
// speak();                // "My name is undefined!"

// // 함수가 어디에 속하는지 알 수 없으므로 this는 undefined에 묶인다.




// const o = {
//     name: 'Julia',
//     greetBackwards: function() {
//         function getReverseName() {
//             let nameBackwards = '';
//             for(let i=this.name.length-1; i>=0; i--) {      // Cannot read property 'length' of undefined
//                 nameBackwards += this.name[i];
//             }
//         }
//         return `${getReverseName()} si eman ym ,olleH`;
//     }
// }
// o.greetBackwards();
// console.log(o.greetBackwards());

// // this 가 다른것에 묶인다.




// const o = {
//     name: 'Julia',
//     greetBackwards: function() {
//         const self = this;
//         function getReverseName() {
//             let nameBackwards = '';
//             for (let i=self.name.length-1; i>=0; i--) {
//                 nameBackwards += self.name[i];
//             }
//             return nameBackwards;
//         }
//         return `${getReverseName()} si eman ym ,olleH`;
//     },
// };
// o.greetBackwards();
// console.log(o.greetBackwards());