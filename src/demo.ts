/* eslint-disable @typescript-eslint/no-unused-vars */

const obj: { [userName: string[]]: string } = {};

obj.q = '1';
obj.w = '';

const a = (a) => {
  console.log('Hello World', a);

  if ((this as any) && this?.as == 2) {
    const bbb = { a: 1 };
  }
};

const c: boolean = true;

const aaa: any = [];

// aaa.map((item) => {
//   return item.asd;
// });

type Primitive = string | number | boolean | null | undefined | symbol | bigint;

// let decimal: number = 0;
// let binary: number = 0b1000101;
// let hex: number = 0x10F2C;
// let octal: number = 0o105;
// let big: bigint = 42n;

const nums: number[] = [1, 2, 3];
const strings: Array<string> = ['a', 'b', 'c'];

const tuple: [number, string, boolean] = [1, 'a', true];

type Arrayasd = Array<number>;

const sum = (a: number, b: number): number => {
  return a + b;
};

const product = (a: number, b: number): number => {
  return a * b;
};

function greet(name: string, greeting?: string): string {
  return `${greeting || 'Hello'}, ${name}!`;
}

// Example usage:
console.log(greet('Alice')); // Output: "Hello, Alice!"
console.log(greet('Bob', 'Hi')); // Output: "Hi, Bob!"

function isSumPositive(a: number, b: number): boolean {
  return a + b > 0;
}

function getSum(a: number[]): number;
function getSum(a: number, b: number): number;
function getSum(a: number | number[], b?: number): number {
  if (typeof a === 'number') {
    return a + (b || 0);
  }

  return a.reduce((acc, item) => acc + item, 0);
}

let u: unknown = 1;
u = '1';

const mySum = getSum(1, 5);
const mySum1 = getSum([1]);

type Zero = [];
type One = [1];
type Two = [1, 1];
type AddOne<T extends unknown[]> = [...T, 1];

type Three = AddOne<Zero>;

declare function create(o: object | null): void;

create({ prop: 0 });

const asd: object;

// asd.b = 2;

// function getSum(a: number | number[], b?: number): number {
//   if (typeof a === 'number') {
//     return a + (b as number);
//   }

//   return a.reduce((acc, item) => acc + item, 0);
// }
