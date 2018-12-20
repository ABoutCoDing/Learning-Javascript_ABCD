// // 화살표 표기법 (arrow notation)

// // function 생략 가능
// // 함수의 매개변수가 하나라도 괄호({}) 생략 가능
// // 함수 바디가 표현식의 하나라도 중괄호와 return 문 생략 가능

// // const f1 = function() { return "hello!"; }
// // 또는
// const f1 = () => "hello!";

// // const f2 = function(name) {return `Hello, ${name}`};
// // 또는
// const f2 = name => `Hello, ${name}`;

// // const f3 = function(a, b) { return a + b; }
// // 또는
// const f3 = (a, b) => a + b;




// const o = {
//     name: 'Julia',
//     greetBackwards: function() {
//         const getReverseName = () => {
//             let nameBackwords = '';
//             for(let i = this.name.length-1; i>=0; i--) {
//                 nameBackwords += this.name[i];
//             }
//             return nameBackwords;
//         }
//         return `${getReverseName()} si eman ym ,olleH`;
//     }
// };
// o.greetBackwards();
// console.log(o.greetBackwards());