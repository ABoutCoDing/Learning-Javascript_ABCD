const input = "As I was going to Saint Ives";
const re = /\w{3,}/ig;

//문자열 (input)의 메서드를 사용할 때
input.match(re);            // ["was", "going", "saint", "Ives"]
input.search(re);           // 5 (세 글자 이상으로 이루어진 첫 단어의 인덱스는 5)

// 정규식(re)의 메서드를 사용할 때
re.exec(input);             // ["was"] (처음 일치하는 것)
re.exec(input);             // ["going"] (exec 는 마지막 위치를 '기억' 한다)
re.exec(input);             // ["Saint"]
re.exec(input);             // ["Ives"]
re.exec(input);             // null
re.test(input);             // true (input에는 세 글자 이상으로 이루어진 단어가 한개 있다.)


// 위 예제는 모두 정규식 리터럴을 그대로 써도 된다.
input.match(/\w{3,}/ig); 
input.search(/\w{3,}/ig);
/\w{3,}/ig.test(input);     // true
/\w{3,}/ig.exec(input);
// [ 'was',
//   index: 5,
//   input: 'As I was going to Saint Ives',
//   groups: undefined ]