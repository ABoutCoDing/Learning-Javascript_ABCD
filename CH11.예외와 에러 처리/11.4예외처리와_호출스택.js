function a() {
    console.log('a: calling b');
    b();
    console.log('a: done');
}
function b() {
    console.log('b: calling c');;
    c();
    console.log('b: done');
}
function c() {
    console.log('c: throwing error');
    throw new Error('c error');
    console.log('c: done');
}
function d() {
    console.log('d: calling c');
    c();
    console.log('d: done');
}

try {
    a();
} catch(err) {
    console.log(err.stack);
}

try {
    d();
} catch(err) {
    console.log(err.stack);
}

// a: calling b
// b: calling c
// c: throwing error
// Error: c error
//     at c (/Users/jamie/Documents/abcd-workspace/es6/CH11.예외와 에러 처리/11.4예외처리와호출스택.js:13:11)
//     at b (/Users/jamie/Documents/abcd-workspace/es6/CH11.예외와 에러 처리/11.4예외처리와호출스택.js:8:5)
//     at a (/Users/jamie/Documents/abcd-workspace/es6/CH11.예외와 에러 처리/11.4예외처리와호출스택.js:3:5)
//     at Object.<anonymous> (/Users/jamie/Documents/abcd-workspace/es6/CH11.예외와 에러 처리/11.4예외처리와호출스택.js:23:5)
//     at Module._compile (internal/modules/cjs/loader.js:707:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:718:10)
//     at Module.load (internal/modules/cjs/loader.js:605:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:544:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:536:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:760:12)
// d: calling c
// c: throwing error
// Error: c error
//     at c (/Users/jamie/Documents/abcd-workspace/es6/CH11.예외와 에러 처리/11.4예외처리와호출스택.js:13:11)
//     at d (/Users/jamie/Documents/abcd-workspace/es6/CH11.예외와 에러 처리/11.4예외처리와호출스택.js:18:5)
//     at Object.<anonymous> (/Users/jamie/Documents/abcd-workspace/es6/CH11.예외와 에러 처리/11.4예외처리와호출스택.js:29:5)
//     at Module._compile (internal/modules/cjs/loader.js:707:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:718:10)
//     at Module.load (internal/modules/cjs/loader.js:605:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:544:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:536:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:760:12)
//     at startup (internal/bootstrap/node.js:308:19)