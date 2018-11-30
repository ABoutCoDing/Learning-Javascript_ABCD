// const obj = { b:2, c:3, d:4 };

// const {a, b, c} = obj;
// a;
// b;
// c;
// // d;           // ReferenceError: d is not defined

// // // console.log(`${a}, ${b}, ${c}, ${d}`);
// // console.log(`${a}, ${b}, ${c}`);




// const obj = { b: 2, c: 2, d: 4 };
// let a, b, c;

// // 에러발생
// // {a, b, c} = obj;

// ({a, b, c} = obj);




// const arr = [1, 2, 3];
// let [x, y] = arr;
// x;
// y;
// z;      // ReferenceError: z is not defined



// // 확산 연산자 (spread operation(...))
// const arr = [1, 2, 3, 4, 5];
// let [x, y, ...rest] = arr;
// x;
// y;
// rest;




let a = 5, b = 10;
[a, b] = [b, a];
a;
b;

// console.log(a);