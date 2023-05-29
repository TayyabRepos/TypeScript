//Functions

//Type alias

type StringOrNumber = string | number;

type StringOrNumberArray = (string | number)[];

type Guitarists = {
  name: string;
  active?: boolean; //? means optional property
  albums: StringOrNumberArray;
};

type UserId = StringOrNumber;

//Literal types
let user: "Tayyab";

// user = 'Wahab' //Error because user can only be Tayyab as it is a literal type

let userName: "Tayyab" | "Amtul" | "Wahab";

userName = "Amtul"; //No error because userName can be any of the three values

//Functions

let sum = (a: number, b: number): number => a + b;

console.log(sum(1, 2));

type MathFunction = (a: number, b: number) => number;

let multiply: MathFunction = function (a: number, b: number): number {
  return a * b;
};

console.log(multiply(2, 3));

//Optional parameters

let AddAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

//Rest Parameters

let total = (a: number = 10, b: number = 2, ...num: number[]): number => {
  return a + b + num.reduce((prev, curr) => prev + curr);
};

console.log(total(13, 41, 5, 51, 12));

//Never Type

let errMsg = (errMsg: string) => {
  throw new Error(errMsg);
};

let infiniteLoop = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break; // Come out from loop
  }
  return;
};
