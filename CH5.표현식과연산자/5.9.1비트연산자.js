let n = 22
n >> 1
n >>> 1
n = -n
n++
n >> 1
n >>> 1

const FLAG_EXECUTE = 1      // 0b001
const FLAG_WRITE = 2        // 0b010
const FLAG_READ = 4         // 0b100

let p = FLAG_READ | FLAG_WRITE
let hasWrite = p & FLAG_WRITE
let hasExecute = p & FLAG_EXECUTE
p = p ^ FLAG_WRITE
p = p ^ FLAG_WRITE

const hasReadOrExecute = p & (FLAG_READ | FLAG_EXECUTE)
const hasReadAndExecute = p & (FLAG_READ | FLAG_EXECUTE) === FLAG_READ | FLAG_EXECUTE

// AND 연산이 OR 연산보다 우선순위가 높다.