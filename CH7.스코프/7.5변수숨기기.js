// {
//     // block 1
//     const x = 'blue';
//     console.log(x);     // "blue"
// }
// console.log(typeof x);  // undefined
// {
//     // block 2
//     const x = 3;
//     console.log(x);     // 3
// }
// console.log(typeof x);  // undefined




// {
//     // 외부 블록
//     let x = 'blue';
//     console.log(x);         // "blue"
//     {
//         // 내부 블록
//         let x = 3;
//         console.log(x);     // 3
//     }
//     console.log(x);         // blue
// }
// console.log(typeof x);      // undefined





{
    // 외부 블록
    let x = { color: "blue" };
    let y = x;
    let z = 3;
    {
        // 내부 블록
        let x = 5;
        console.log(x);         // 5
        console.log(y.color);   // blue
        y.color = "red";
        console.log(z);         // 3
    }
    console.log(x.color);       // "red"
    console.log(y.color);       // "red"
    console.log(z);             // 3
}