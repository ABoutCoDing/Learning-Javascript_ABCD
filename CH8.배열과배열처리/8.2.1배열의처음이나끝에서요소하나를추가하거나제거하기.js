// 배열의 첫번째 요소 인덱스 0
// 배열의 끝 arr.length - 1
// push, pop : 배열의 끝에 요소를 추가하거나 제거   (stack)
// shift, unshift : 배열의 끝에 오소를 제거하거나 추가 (queue)

const arr = ["b", "c", "d"];
arr.push("e");          // 4, arr은 ["b", "c", "d", "e"]
arr.pop();              // "e", arr 은 ["b", "c", "d"]
arr.unshift("a");       // 4, arr은 ["a", "b", "c", "d"]
arr.shift();            // "a", arr은 ["b", "c", "d"]