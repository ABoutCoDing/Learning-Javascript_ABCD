const moment = require('moment-timezone');

const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

const msDiff = d2 - d1;                 // 417744000000 ms
const daysDiff = msDiff/1000/60/60/24   // 4834.96 days



const dates = [];


//랜덤한 날짜를 몇 개 만든다.
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for (let i=0; i<10; i++)
    dates.push(new Date(min + delta*Math.random()));

// dates 배열은 랜덤으로 만들었으므로 뒤죽박죽
// 다음과 같이 역순으로 정렬할 수 있다.
dates.sort((a, b) => b - a);

// 날짜순으로 정렬할 수도 있습니다.
dates.sort((a, b) => a-b);



// Moment.js
// let m = moment();
// m.add(3, 'days');
// m.subtract(2, 'years');

// m = moment();
// m.startOf('year');
// m.endOf('month');



let m = moment()
    .add(10, 'hours')
    .subtract(3, 'days')
    .endOf('month');
// m은 이제 3일 전으로 부터 10시간 뒤인 달의 마지막 순간이다.
// console.log(m.format("YYYY년 M월 D일 HH:mm"));
