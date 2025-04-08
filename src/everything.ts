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

const theGuyInFrontOfYou = {
  firstName: 'Avet',
  lastName: 'Brutyan',
  position: `Software Engineer at
   Simply Technologies`,
} as const satisfies {
  firstName: string;
  lastName: string;
  position: string;
};

function greet(name: string, greeting?: string): string {
  return `${greeting || 'Hello'}, ${name}!`;
}

greet('Paul');
greet('Richard', 'Good morning');

interface Car2 {
  engineType: 'electric' | 'gas' | 'diesel' | 'hybrid';
}

class QWEQWE implements Car2 {
  asd() {}
  engineType = 'electric';
}

function kekw<T>(a: T): T {
  return a;
}

const result = kekw('asdasd');

function createStreetLight<C extends string>(
  colors: C[],
  defaultColor?: NoInfer<C>,
) {
  // ...
}
createStreetLight(['red', 'yellow', 'green'], 'red');
createStreetLight(['red', 'yellow', 'green'], 'blue');

type Shape =
  | {
      radius: number;
      side?: never;
    }
  | {
      radius?: never;
      side: number;
    };

const shape: Shape = {
  radius: 5,
  // side: 1,
};

type TUser = {
  name: string;
  age: number;
  email?: string;
};

// const user: { name: string; age: number, } = {
//   name: 'Victor',
//   age: 27,
// };

const user: {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email?: string;
  phone?: string;
} = {
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: new Date('1990-01-01'),
  email: 'jd@example.com',
};

// interface User {
//   firstName: string;
//   lastName: string;
// }

// interface User {
//   dateOfBirth: Date;
//   email?: string;
//   phone?: string;
// }

interface Person {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

interface User extends Person {
  username: string;
  email: string;
  password: string;
}

enum ResponseStatus {
  ERROR, // 0
  SUCCESS, // 1
  LOADING, // 2
}

enum EStatusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ServerError = 500,
}

enum RequestMethod1 {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const RequestMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;

const STATUS_CODES = {
  OK: 200,
  Created: 201,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  ServerError: 500,
} as const;

type ObjectValues<T> = T[keyof T];
const a23 = STATUS_CODES['Created'];
type qweqwe = (typeof STATUS_CODES)['Created'];

type StatusCode = ObjectValues<typeof STATUS_CODES>;
type StatusCode0 = keyof typeof STATUS_CODES;

function request(
  method: RequestMethod,
  url: string,
): { responseStatus: StatusCode } {
  // ...
}

type Point = { x: number; y: number };
type P = keyof Point;

const asdasd: P = 'x';

let value: string | number;

value = 'abc';
value = 123;
value = [1, 2];
value = null;

const qwqwe: TTT = ['asdasd', '123123'];

let value: string | number;

value = 'abc';
value = 123;
value = [1, 2];
value = null;

type MyObj1 = { firstName: string; lastName: string } & { email: string };
type MyObj2 = {
  firstName: string;
  lastName: string;
} & {
  email: string;
  lastName: number;
};

type LN = MyObj2['lastName'];

const aaa: MyObj2 = {
  firstName: 'asdasd',
  email: 'asdasd@asdasd.com',
  lastName: undefined,
};

const d = new Date();
const formattedDate = new Intl.DateTimeFormat('hy-AM', {
  month: 'long',
  year: 'numeric',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
}).format(new Date());

type EnginType = 'electric' | 'gas' | 'diesel' | 'hybrid';

type Vehicle = {
  make: string;
  model: string;
  year: number;
  engineType: EnginType;
};

type Car = Vehicle & {
  doors: number;
  hasSunroof: boolean;
};

type Motorcycle = Vehicle & {
  handlebarType: string;
  hasSidecar: boolean;
  engineType: 'gas';
};

const mmm: Motorcycle = {
  handlebarType: 'asd',
  hasSidecar: true,
  make: 'ASD',
  model: 'ASD55',
  year: 2000,
  engineType: 'gas',
};



const Row = () => {
  return (
    <tr>
      <td>Row 1, Cell 1</td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 3</td>
    </tr>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Table = <TRow extends Record<string, unknown>>(props: {
  rows: TRow[];
  renderRow: FC<TRow>;
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, index) => {
          return (
            <tr key={index}>
              <Row {...row} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// function identity<T>(arg: T): T {
//   return arg;
// }

type ASD<T> = T[];

function identity<T>(arg: T): T {
  return arg;
}

const zxcw = identity('dsd');

const rty: ASD<object> = [{}, {}];
