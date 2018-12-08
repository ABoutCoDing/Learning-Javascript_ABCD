function sum(arr, f) {
    // 함수가 전달되지 않았으면 매개변수를 그대로 반환하는 null 함수를 쓴다.
    if (typeof f != 'function') f = x => x;

    return arr.reduce((a, x) => a += f(x), 0);
}


// function sumOfSquares(arr) {
//     return sum(arr, x => x*x);
// }



function newSummer(f) {
    return arr => sum(arr, f);
}



const sumOfSquares = newSummer(x => x*x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));
sumOfSquares([1, 2, 3]);                // return 14
sumOfCubes([1, 2, 3]);                  // return 36