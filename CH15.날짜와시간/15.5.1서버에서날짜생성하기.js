const moment = require('moment-timezone');

// const d = new Date(Date.UTC(2016, 4, 27));      // May 27, 2016 UTC


// Moment.js에 넘기는 배열은 자바스크립트의 Date생성자에 넘기는 매개변수와 똑같고 
// 월은 0으로 시작한다.
// toDate() 메서드는 Moment.js 객체를 자바스크립트 Date 객체로 변환된다.
const d = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();      // 2016-04-27T16:19:00.000Z
const s = moment.tz([2016, 3, 27, 9, 19], 'Asia/Seoul').toDate();               // 2016-04-27T00:19:00.000Z