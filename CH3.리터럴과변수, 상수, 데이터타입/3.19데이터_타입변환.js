const numStr = "33.3";
const num = Number(numStr);


// const a = parseInt("16 volts", 10);     // " volts" 무시 10진수 16
// const b = parseInt("3a", 16);           // 16진수 3a를 10진수로 변환. 결과는 58
// const c = parseFloat("15.5 kph");       // " kph" 무시 15.5



// // Date를 숫자로 바꿀때 ValueOf() 사용
// const d = new Date();
// const ts = d.valueOf();
// console.log(ts);



// // 불리언 값을 1(true), 0(false)으로 바꾸어야 할때
// const b = true;
// const n = b ? 1: 0;



// // 문자열로 변환
// const n = 33.5;
// n;  // 33.5 숫자
// const s = n.toString();
// s;  // 33.5 문자



// 불리언으로 변환
const n = 0;                // 거짓 같은 값
const b1 = !!n;             // false
const b2 = Boolean(n);      // false