function addThreeSquareAddFiveTakeSquareRoot(x) {
    return Math.sqrt(Math.pow(x+3, 2)+5);
}

// 별명을 쓰기전
// const answer = (addThreeSquareAddFiveTakeSquareRoot(5) 
//                 + addThreeSquareAddFiveTakeSquareRoot(2)) 
//                 / addThreeSquareAddFiveTakeSquareRoot(7);

// 별명을 쓰면 바뀐다.
// const f = addThreeSquareAddFiveTakeSquareRoot;
// const answer = (f(5) + f(2)) / f(7);





const Money = require('math-money');

const oneDollar = Money.Dollar(1);

// Money.Dollar 도 길게 느껴지면 이렇게 해도 된다.
const Dollar = Money.Dollar;
const twoDollars = Dollars(2);
// oneDollar와 twoDollars는 같은 타입의 인스턴스다.
