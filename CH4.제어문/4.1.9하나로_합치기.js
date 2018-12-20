// m 이상 n 이하의 무작위 정수 반환
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

// 크라운 앤 앵커 게임의 여섯 그림 중 하나에 해당하는 문자열을 무작위로 반환
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0, 5)];
}

let funds = 50;
let round = 0;

while(funds > 1 && funds < 100) {
    round++;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);
    // 돈을 건다.
    let bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
    let totalBet = rand(1, funds);
    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        // 판돈을 나눈다.
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while(remaining > 0);
    }
    funds = funds - totalBet;
    console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') + `(total: ${totalBet} pence)`);

    // 주사위를 굴린다.
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);

    // 판돈을 가져온다.
    let winnings = 0;
    for (let die=0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) winnings = winnings + bets[face];
    }

    funds = funds + winnings;
    console.log(`\twinnigs: ${winnings}`);
}
console.log(`\tendig funds: ${funds}`);
