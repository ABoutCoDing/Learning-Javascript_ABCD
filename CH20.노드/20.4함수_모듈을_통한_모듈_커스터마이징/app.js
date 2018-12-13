// const debug = require('./debug')('main');     // 모듈이 반환하는 함수를 즉시 호출

// debug("starting");      // 디버그가 활성화 되어 있다면 "main starting +0ms"



const debug1 = require('./debug')('one');
const debug2 = require('./debug')('two');

debug1('started first debugger!');
debug2('started second debugger!');

setTimeout(function() {
    debug1('after some time...');
    debug2('what happens?');
}, 200);

/*
one started first debugger! + 0ms
two started second debugger! + 0ms
one after some time... + 0ms
two what happens? + 0ms
*/