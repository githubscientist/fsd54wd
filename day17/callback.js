// let sayHello = function () {
//     console.log("Hello");
// }

// setTimeout(sayHello, 2000); // 2 seconds

// examples for callback functions
/*
    1. Array.prototype.forEach()
    2. Array.prototype.map()
    3. Array.prototype.filter()
    4. Array.prototype.reduce()
    5. Array.prototype.find()
    6. Array.prototype.findIndex()
    7. XMLHttpRequest
    8. Event Listeners
    9. File I/O
*/

function incrementBy5(num) {
    return num + 5;
}

function incrementBy10(num) {
    return num + 10;
}

function arithmeticOperations(num, callback) {
    return callback(num);
}

console.log(arithmeticOperations(5, incrementBy5));