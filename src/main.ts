let a: number = 5,
  b: string = "6",
  c: boolean = true,
  d: any = "hello";

let e: number | string = 5;

let f: number[] | string[];

let reg: RegExp = /hello/;

const sum = (a: number, b: string) => a + b;

console.log(sum(a, b));
