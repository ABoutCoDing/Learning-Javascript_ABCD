let a = 1;          // 원본
let b = a;          // 사본, b는 1
a = 2;              // 원본값 변경
console.log(b);     // 1 사본의 값은 바뀌지 않음



a === 2             // true



function change(a) {
    a = 5;
}

a = 3;
change(a);
console.log(a);     // 3



let o = {a: 1};
let p = o;          // p는 o가 가리키고 있는 것을 가리킨다.
o.a = 2;
console.log(p);     // {a: 2}



p === o;            // true
o = {a: 2};         // 이제 o는 다른 것을 가리킨다. {a: 1}을 수정한 것이 아니다.
p === o;            // false
console.log(p);     // {a: 1}




let q = {a: 1};
q === {a: 1};       // false




function change_o(o) {
    o.a = 999;
}

// let o = {a: 1};
// change_o(o);
// console.log(o); // {a: 999}