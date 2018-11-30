// const x = 5;
// const y = 3 - -x;       // 8




// const s = "5";
// const y = 3 + +s;           // 8

// const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
// const p1 = -x1 * 1;
// const p2 = +x2 * 2;
// const p3 = +x3 * 3;
// const p4 = -x4 * 4;     // 25.32





let x = 2;
const r1 = x++ + x++;
console.log(r1);
const r2 = ++x + ++x;
console.log(r2);
const r3 = x++ + ++x;
console.log(r3);
const r4 = ++x + x++;
console.log(r4);
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;





// let x = 2;
// const r1 = x++ + x++;
// //     ((x++)) + (x++))
// //          (2 + (x++))
// //          (2 + 3)
// //             5

// const r2 =  ++x + ++x;
// //      ((++x) + (++x))
// //      (5 + (++x))
// //      (5 + 6)
// //      11

// const r3 = x++ + ++x;
// //      ((x++) + (++x))
// //      (6  + (++x))
// //      (6 + 8)
// //      14