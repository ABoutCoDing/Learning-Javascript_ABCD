const stuff = 
    'hight:     9\n' + 
    'medium:    5\n' +
    'low:       2\n';

const levels = stuff.match(/:\s*[0-9]/g);       // [ ':     9', ':    5', ':       2' ]


const messyPhone = '(505) 555-1515';            // (505) 555-1515
const neatPhone = messyPhone.replace(/\D/g, '');    // 5055551515


const field = '  something   ';
const valid = /\S/.test(field);             // true