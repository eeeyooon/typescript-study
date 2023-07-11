let a: number = 5;

let b: string = "hello";

let c: any = 4;
c = "hi";

let d: number | string = "5";
d = 5;

let e: string[] = ["apple", "banana"];
e.push("cherry");

console.log(a, b, c, d, e);

//tsc > js로 컴파일
//ts-node src/index.ts

// 함수 예제 (number 인자 두개를 받고, number타입의 값을 리턴)
function addNumber(a: number, b: number): number {
  return a + b;
}

console.log(addNumber(3, 7));
