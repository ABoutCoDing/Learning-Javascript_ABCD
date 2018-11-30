const obj = {};

obj.color = "yellow";
obj["not an identifier"] = 3;

console.log(obj["not an identifier"]);
console.log(obj["color"]);




const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);




const sam1 = {
    name: 'Sam',
    age: 4,
}

const sam2 = { name: 'Sam', age: 4 };   // 한줄로 선언

const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'Catus',
    },
}

sam3.classification.family;             // "Felidae"
sam3["classification"].family;          // "Felidae"
sam3.classification["family"];          // "Felidae"
sam3["classification"]["family"];       // "Felidae"




sam3.speak = function() { return "Meow!"; };
console.log(sam3.speak());


delete sam3.classification;
delete sam3.speak;