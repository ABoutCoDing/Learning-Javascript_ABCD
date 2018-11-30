'use strict';
// es6 기능: 블록스코프 변수 선언
const sentence = [
    {subject: 'Javascript', verb: 'is', object: 'great'},
    {subject: 'Elephants', verb: 'are', object: 'large'},
];
// es6 기능: 객체 분해
function say({subject, verb, object}) {
    // es6 기능: 템플릿 문자열
    // 아래 사용한 것은 따옴표가 아니라 백틱(`), 즉 탭 키 바로 위에 있는 문자
    console.log(`${subject} ${verb} ${object}`);
}
// es6 기능: for...of
for (let s of sentence) {
    say(s);
}