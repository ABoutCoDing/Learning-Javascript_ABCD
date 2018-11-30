function getGreeting() {
    return "Hello World!";
}
    

getGreeting();
getGreeting;



const f = getGreeting;
f();


const o = {};
o.f = getGreeting;
o.f();



const arr = [1, 2, 3];
arr[1] = getGreeting;
arr[1]();