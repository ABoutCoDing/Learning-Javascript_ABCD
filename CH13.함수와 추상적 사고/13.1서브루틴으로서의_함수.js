const year = new Date().getFullYear();
if(year % 4 !== 0) console.log(`${year} is NOT a leap year`);
else if (year % 100 != 0) console.log(`${year} is a leap year.`);
else if (year % 400 != 0) console.log(`${year} is NOT a leap year.`);
else console.log(`${year} is a leap year`);



function printLeapYearStatus() {
    const year = new Date().getFullYear();
    if (year % 4 !== 0) console.log(`${year} is NOT a leap year.`);
    else if (year % 100 != 0) console.log(`${year} is a leap year.`);
    else if (year % 400 != 0) console.log(`${year} is NOT a leap year.`);
    else console.log(`${year} is a leap year.`);
}

console.log(printLeapYearStatus());