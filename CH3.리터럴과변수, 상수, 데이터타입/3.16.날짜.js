const now = new Date();
now;

const halloween = new Date(2016, 9, 31);    // 월은 0에서 시작 9는 10월




const halloweenParty = new Date(2016, 9, 31, 19, 0);    // 19:00 = 7:00 pm

halloweenParty.getFullYear();       // 2018
halloweenParty.getMonth();          // 9
halloweenParty.getDate();           // 31
halloweenParty.getDay();            // 1 (월요일, 0은 일요일)
halloweenParty.getHours();          // 19
halloweenParty.getMinutes();        // 0
halloweenParty.getSeconds();        // 0
halloweenParty.getMilliseconds();   // 0


console.log(halloweenParty.getDay());