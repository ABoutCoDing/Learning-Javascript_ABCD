// 블록문(block statement)

{
    console.log("statement 1");
    console.log("statement 2");
}

console.log("statement 3");



let funds = 50;

while(funds > 1 && funds < 100) {
    funds = funds + 2;      // 2보 전진
    funds = funds - 1;      // 1보 후퇴
}


let funds = 50;
while(funds > 1 && funds < 100)
    funds = funds + 2;