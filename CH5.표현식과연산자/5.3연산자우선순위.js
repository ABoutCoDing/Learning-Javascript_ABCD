let x = 3, y;
x += y = 6*5/2;


// 곱셈과 나눗셈. 우선순위 14, 왼쪽으로 오른쪽
// x + y = (6*5)/2
// x += y = (30/2)
// x += y = 15
// 할당. 우선순위 3, 오른쪽에서 왼쪽으로
// x += (y=15)
// x += 15
// 18