const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go() {
        const countdown = this;
        return new Promise(function(resolve, reject) {
            for (let i=countdown.seconds; i>=0; i--) {
                setTimeout(function() {
                    if(countdown.superstitious && i===13)
                        return reject(new Error("Oh my god"));
                    countdown.emit('tick', i);
                    if (i===0) resolve();
                }, (countdown.seconds-i)*1000)
            }
        });
    }
}




const c = new Countdown(5);

c.on('tick', function(i) {
    if(i>0) console.log(i + '...');
});
c.go()
    .then(function() {
        console.log("GO!");
    })
    .catch(function(err) { 
        console.error(err.message);
    });






const c = new Countdown(15, true) 
    .on('tick', function(i) {       // 체인으로 연결해도 된다.
        if(i>0) console.log(i + '...');
    });

c.go()
    .then(function() {
        console.log("GO!");
    })
    .catch(function(err) {
        console.error(err.message);
    });





const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(second, superstitious) {
        super();
        this.seconds = secunds;
        this.superstitious = !!superstitious;
    }
    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function(resolve, reject) {
            for(let i=countdown.seconds; i>=0; i--) {
                timeoutIds.push(setTimeout(function() {
                    if (countdown.superstitious && i === 13) {
                        // 대기중인 타임아웃을 모두 취소
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("Oh my god"));
                    }
                    countdown.emit('tick', i);
                    if(i===0) resolve();
                }, (countdown.seconds-i)*1000));
            }
        })
    }
}