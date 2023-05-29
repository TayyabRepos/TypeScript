"use strict";
// Convert to more or less specific
let a = "Hello";
let b = a;
let c = b;
let d = "World";
let e = 1;
const AddORConcat = (a, b, c) => {
    if (c === "Add")
        return a + b;
    return "" + a + b;
};
let myVal = AddORConcat(10, 10, "Concat");
console.log(myVal);
//Type sees it as string but it is a number
let nextVal = AddORConcat(10, 10, "Concat");
console.log(nextVal);
//The Dom
// let img = document.querySelector("img")!;
// img.src;
// let myImg = document.getElementById("#img") as HTMLImageElement;
// myImg.src;
