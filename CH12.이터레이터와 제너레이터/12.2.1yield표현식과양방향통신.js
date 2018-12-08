function* interrogate() {
    const name = yield "What is your name";
    const color = yield "What is your favorite color";
    return `${name}'s favorite color is ${color}`;
}



const it = interrogate();
it.next();               // { value: 'What is your name', done: false }
it.next('Ethan');        // { value: 'What is your favorite color', done: false }
it.next('orange');       // { value: "Ethan's favorite color is orange", done: true }



// 1. 제너레이터는 이터레이터를 반환(return)하고 일시 정지한 상태로 시작

function* interrogate() {
    let name = yield "What is your name?";
    let color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}

// 2. undefined를 제너레이터에 넘긴다. 제너레이터는 "What is your name?"을 넘기고 yield 일시 정지 한다.

function* interrogate() {
    let name = yield "What is your name?";
    let color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}`;
}


// 3. "Ethan"을 제너레이터에 넘긴다. 제너레이터는 "What is your favorite color?"을 넘기고 일시 정지 한다.

function* interrogate() {
    let name = yield "What is your name?";
    let color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}

// 4. "orange"를 제너레이터에 넘긴다. 제너레이터는 "Ethan's favorite color is orange"를 반환하고 멈춘다.

function* interrogate() {
    let name = yield "What is your name?";
    let color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}
