//Type Assertions or Type Casting
type one = string;
type two = string | number;
type three = "Hello";

// Convert to more or less specific

let a: one = "Hello";
let b = a as two;
let c = b as three;

let d = <one>"World";
let e = <string | number>1;

const AddORConcat = (
  a: number,
  b: number,
  c: "Add" | "Concat"
): number | string => {
  if (c === "Add") return a + b;
  return "" + a + b;
};

let myVal: string = AddORConcat(10, 10, "Concat") as string;
console.log(myVal);

//Type sees it as string but it is a number
let nextVal: number = AddORConcat(10, 10, "Concat") as number;
console.log(nextVal);

//The Dom
// let img = document.querySelector("img")!;
// img.src;
// let myImg = document.getElementById("#img") as HTMLImageElement;
// myImg.src;
