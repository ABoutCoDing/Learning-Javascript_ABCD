let funds = 50;

if(new Date().getDay() === 3) {
    totalBet = 1;
} else if (funds === 7) {
    totalBet = funds;
} else {
    console.log("No superstition here!");
}



if (new Date().getDay() === 3) {
    totalBet = 1;
} else {
    if (funds === 7) {
        totalBet = funds;
    } else {
        console.log("No superstition here!");
    }
}