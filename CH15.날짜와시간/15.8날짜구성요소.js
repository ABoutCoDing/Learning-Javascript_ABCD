const d = new Date(Date.UTC(1815, 9, 10));

// 다음 결과는 로스엔젤레스 기준
d.getFullYear();            // 1815
d.getMonth();               // 9 - 10월
d.getDate();                // 9
d.getDay();                 // 1 - 월요일
d.getHours();               // 17
d.getMinutes();             // 0
d.getSeconds();             // 0
d.getMilliseconds();        // 0


// UTC 기준 메서드
d.getUTCFullYear();         // 1815
d.getUTCMonth();            // 9 - 10월
d.getUTCDate();             // 10
// ... etc