const arr = [1, 2, 3, 4, 5];
arr.reverse();          // arr은 [5, 4, 3, 2, 1]


const arr = [5, 3, 2, 4, 1];
arr.sort();             // arr은 [1, 2, 3, 4, 5]




const arr = [{name: "Suzanne"}, {name: "Jim"}, {name: "Trevor"}, {name: "Amanmda"}];
arr.sort();
arr.sort((a, b) => a.name > b.name);
arr.sort((a, b) => a.name[1] < b.name[1]);