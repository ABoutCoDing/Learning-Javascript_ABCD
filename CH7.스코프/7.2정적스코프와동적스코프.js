function f1() {
    console.log('one');
}

function f2() {
    console.log('two');
}

f2();
f1();
f2();


// 자바스크립트의 스코프는 정적
// 소스코드만 봐도 변수가 스코프에 있는지 판단할 수 있다.
// 다만 소스만 봐도 즉시 스코프를 분명히 안다는 뜻은 아니다.




// const x = 3;

// function f() {
//     console.log(x);
//     console.log(y); // ReferenceError: y is not defined
// }

// {   // 새 스코프
//     const y = 5;
//     f();
// }


// 자바스크립트의 정적 스코프는 전역 스코프(global scope), 블록 스코프(block scope), 함수 스코프(function scope)에 적용된다.