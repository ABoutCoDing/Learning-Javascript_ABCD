// const input = "Address: 333 Main St., Anywhere, Ny, 55532, Phone: 555-555-2525.";
// const match = input.match(/\d{5}.*/);
// [ '55532, Phone: 555-555-2525.',
//   index: 37,
//   input: 'Address: 333 Main St., Anywhere, Ny, 55532, Phone: 555-555-2525.',
//   groups: undefined ]



const equation = "(2 + 3.5) * 7";
const match = equation.match(/\(\d \+ \d\.\d\) \* \d/);
// [ '(2 + 3.5) * 7',
//   index: 0,
//   input: '(2 + 3.5) * 7',
//   groups: undefined ]