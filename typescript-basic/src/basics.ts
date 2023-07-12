/* -------------------------------------------------------------------------- */
/*                                 기본 타입 이해하기                                 */
/* -------------------------------------------------------------------------- */

// Primitives : number, string, boolean
// more complex types: arrays, objects
// Function types, parameters

// Primitivies

let age: number = 24;

age = 12.1;

let userName: string;

userName = "kevin";

let isInstructor: boolean;

isInstructor = true;

// ? More complex types

//* Arrays

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

//* Objects

let person: {
  name: string;
  age: number;
};

// 타입을 지정하지 않으면 기본 타입은 "any"임

person = {
  name: "Max",
  age: 32,
};

let people: {
  name: string;
  age: number;
}[];

/* -------------------------------------------------------------------------- */
/*                                 타입 추론 이해하기                                 */
/* -------------------------------------------------------------------------- */

//? Type inference

let course = "React - The Complete Guide";

/* -------------------------------------------------------------------------- */
/*                                 함수 및 함수 유형                                 */
/* -------------------------------------------------------------------------- */

// 1. 타입을 가진 함수
// 2. 제네릭 타입

//? Functions & types

// 함수는 매개변수와 반환 값의 타입을 항상 생각해야 함.
function add(a: number, b: number) {
  return a + b;
  // 반환 값의 타입이 함수 타입을 추론함.
}

// return문이 없는 함수일 땐 반환 값이 void
function printOutput(value: any) {
  console.log(value);
}

//? Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["1", "2", "3"], "4");

stringArray[0].split("");
