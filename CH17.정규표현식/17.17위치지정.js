// const input = "It was the best of times, it was the worst of times";
// const beginning = input.match(/^\w+/g);         // [ 'It' ]
// const end = input.match(/\w+$/g);               // [ 'times' ]
// const everything = input.match(/^.*$/g);        // [ 'It was the best of times, it was the worst of times' ]
// const nomatch1 = input.match(/^best/ig);        // null
// const nomatch2 = input.match(/worst$/ig);       // null



const input = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input.match(/^\w+/mg);       // [ 'One', 'Two', 'Three', 'Four' ]
const endings = input.match(/\w+$/mg);          // [ 'line', 'lines', 'lines', 'Four' ]