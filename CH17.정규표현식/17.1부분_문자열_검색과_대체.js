const input = "As I was going to Saint Ives";
// input.startsWith("As");              // true
// input.endsWith("Ives");              // true
// input.startsWith("going", 9);        // true     -- 인덱스 9에서 시작
// input.endsWith("going", 14);         // true     -- 인덱스 14를 문자열 끝으로 간주
// input.includes("going");             // true
// input.includes("going", 10);         // false    -- 인덱스 10에서 시작하면 "going"은 없다.
// input.indexOf("going");              // 9
// input.indexOf("going", 10);          // -1
// input.indexOf("nope");               // -1



input.toLowerCase().startsWith("as");       // true

const input = "As I was going to Saint Ives";
const output = input.replace("going", "walking");       // As I was walking to Saint Ives
