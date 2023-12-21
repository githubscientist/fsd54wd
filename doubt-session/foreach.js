// let numbers = [1, 2, 3, 4, 5];

// function print(val) {
//     console.log(val);
// }

// numbers.forEach(print);

// let numbers = [1, 2, 3, 4, 5];

// // let print = function (val) {
// //     console.log(val);
// // } 

// numbers.forEach(val => console.log(val));

let persons = [
    {
        name: 'John',
        age: 20
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe'
        },
        age: 30
    },
    {
        name: 'Mark',
        age: 40
    }
];

persons.forEach((person, index) => {
    if (index == 0) {
        console.log(`At index ${index}, name=${person.name}, age=${person.age}`);
    }
});

console.log(persons[1].name.lastName);