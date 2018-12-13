const input = "As I was going to Saint Ives";
// input.startsWith("As");              // true
// input.endsWith("Ives");              // true
// input.startsWith("going", 9);        // true
// input.endsWith("going", 14);         // true
// input.includes("going");             // true
// input.includes("going", 10);         // false
// input.indexOf("going");              // 9
// input.indexOf("going", 10);          // -1
// input.indexOf("nope");               // -1



input.toLowerCase().startsWith("as");       // true

const input = "As I was going to Saint Ives";
const output = input.replace("going", "walking");       // As I was walking to Saint Ives
