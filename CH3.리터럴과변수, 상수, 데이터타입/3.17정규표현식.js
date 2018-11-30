const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;

const phone = /\d{3}-\d{4}-\d{4}/;

//  /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/

console.log("111-1234-1111".match(phone));
