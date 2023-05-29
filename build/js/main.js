"use strict";
//Functions
//Literal types
let user;
// user = 'Wahab' //Error because user can only be Tayyab as it is a literal type
let userName;
userName = "Amtul"; //No error because userName can be any of the three values
//Functions
let sum = (a, b) => a + b;
console.log(sum(1, 2));
let multiply = function (a, b) {
    return a * b;
};
console.log(multiply(2, 3));
//Optional parameters
let AddAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//Rest Parameters
let total = (a = 10, b = 2, ...num) => {
    return a + b + num.reduce((prev, curr) => prev + curr);
};
console.log(total(13, 41, 5, 51, 12));
//Never Type
let errMsg = (errMsg) => {
    throw new Error(errMsg);
};
let infiniteLoop = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // Come out from loop
    }
    return;
};
