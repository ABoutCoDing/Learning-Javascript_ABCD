const arr = new Array(5).fill(1);       // [1, 1, 1, 1, 1]로 초기화
arr.fill("a");                          // arr 은 ["a", "a", "a", "a", "a"]
arr.fill("b", 1);                       // arr 은 ["a", "b", "b", "b", "b"]
arr.fill("c", 2, 4);                    // arr 은 ["a", "b", "c", "c", "b"]
arr.fill(5.5, -4);                      // arr 은 ["a", 5.5, 5.5, 5.5, 5.5]
arr.fill(0, -3, -1);                    // arr 은 ["a", 5.5, 0, 0, 5.5]