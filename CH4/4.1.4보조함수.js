function rand(m, n) {
    return m + Math.floor(n - m + 1) * Math.random();
} 

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0, 5)];
}