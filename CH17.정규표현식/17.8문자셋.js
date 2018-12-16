const beer99 = "99 bottles of beer on the wall " +
        "take 1 down and pass it around -- " +
        "98 bottles of beer on the wall.";

const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);   // [ '9', '9', '1', '9', '8' ]
 

const m1 = beer99.match(/[0123456789]/g);       // [ '9', '9', '1', '9', '8' ]
const m2 = beer99.match(/[0-9]/g);              // [ '9', '9', '1', '9', '8' ]

const match = beer99.match(/[\-0-9a-z.]/ig);    //[ '9', '9', 'b', 'o', 't', 't', 'l', 'e' ... '.' ]

// const match = beer99.match(/[^\-0-9a-z.]/);
// [ ' ',
//   index: 2,
//   input: '99 bottles of beer on the wall take 1 down and pass it around -- 98 bottles of beer on the wall.',
//   groups: undefined ]