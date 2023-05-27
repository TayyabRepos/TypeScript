//Arrays and objects
let stringArray = ["a", "b", "c"];

let guitars = ["Gibson", "Fender", 5150];

let mixedArray = ["Hello", 1, true];

// stringArray[0] = 1; //Error because it is not a string

guitars[3] = "Ibanez";

mixedArray.unshift("First Item");
console.log(mixedArray);

mixedArray = stringArray;
mixedArray = guitars;
guitars = stringArray;
// guitars = mixedArray //Error
let myTuple: [string, number, boolean] = ["Hello", 1, true];

// myTuple = mixedArray; //Error because it is not a tuple
mixedArray = myTuple;
console.log(mixedArray);

// let myObj: object;
let myObj = {};
myObj = [];
console.log(typeof myObj);

// type Guitarists = {
//   name: string;
//   active?: boolean; //? means optional property
//   albums: (string | number)[];
// };

interface Guitarists {
  name: string;
  active?: boolean; //? means optional property
  albums: (string | number)[];
}

let vanHalen: Guitarists = {
  name: "Van Halen",
  active: true,
  albums: ["Van Halen", "1984", 5150],
};
let jp: Guitarists = {
  name: "Jimmy",
  active: false,
  albums: ["I", "II", "5150"],
};

// jp = vanHalen; //Emit error if  remove any property from the type Guitarists if ? is not used in the property

let greetGuitarist = (guitarist: Guitarists) => {
  console.log(`Hello ${guitarist.name}`);
};

console.log(greetGuitarist(vanHalen));
