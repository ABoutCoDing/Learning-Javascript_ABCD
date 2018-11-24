
let funds = 50;

while(funds > 1 && funds < 100) 

funds = funds + 2;



while (funds > 1 && funds < 100) funds = funds + 2;


while (funds > 1 && funds < 100) {funds = funds + 2;}




while (funds > 1 && funds < 100) 
    funds = funds + 2;
    funds = funds - 1;

// 같다.

while (funds > 1 && funds < 100) {
    funds = funds + 2;              // while 루프 바디
}

funds = funds - 1;                  // while 루프가 끝난 다음 실행


// 잘못된것 1
if (funds > 1) {
    console.log("There's money left!");
    console.log("That means keep playing!");
} else 
    console.log("I'm broke! Time to quit.");

// 잘못된것 2
if (funds > 1)
    console.log("There's money left! Keep playing!");
else {
    console.log("I'm broke!");
    console.log("Time to quit");
}