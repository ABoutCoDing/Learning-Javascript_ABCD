const n = 5;
const s = "5";
n === s;
n !== s;
n === Number(s);
n !== Number(s);
n == s;
n != s;

const a = {name: "an object"};
const b = {name: "an object"};
a === b;    // false    (객체는 항상 다름)
a !== b;    // true
a == b;     // false    (권장하지 않음)
a != b;     // true     (권장하지 않음)



3 > 5;
3 >= 5;
3 < 5;
3 <= 5;

5 > 5;
5 >= 5;
5 < 5;
5 <= 5;

