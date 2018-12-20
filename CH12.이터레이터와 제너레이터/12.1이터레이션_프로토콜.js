// class Log {
//     constructor() {
//         this.messages = [];
//     }
//     add(message) {
//         this.messages.push({ message, timestamp: Date.now() });
//     }
// }




// class Log {
//     constructor() {
//         this.messages = [];
//     }
//     add(message) {
//         this.messages.push({ message, timestamp: Date.now() });
//     }
//     [Symbol.iterator]() {
//         return this.messages.values();
//     }
// }



// const log = new Log();
// log.add("first day at sea");
// log.add("spotted whale");
// log.add("spotted another vessel");

// // 로그를 배열 처럼 순회
// for (let entry of log) {
//     console.log(`${entry.message} @ ${entry.timestamp}`);
// }



// class Log {
//     //...

//     [Symbol.iterator]() {
//         let i = 0;
//         const messages = this.messages;
//         return {
//             next() {
//                 if (i >= messages.length)
//                     return { value: undefined, done: true };
//                 return { value: messages[i++], done: false }
//             }
//         }
//     }
// }



class FibonaccieSequence {
    [Symbol.iterator]() {
        let a = 0, b = 1;
        return {
            next() {
                let rval = { value: b, done: false };
                b += a;
                a = rval.value;
                return rval;
            }
        };
    }
}

const fib = new FibonaccieSequence();
let i = 0;
for (let n of fib) {
    console.log(n);
    if (++i > 9) break;
}