let a = 5;
let b = "hello";
let c = 4;
c = "hi";
let d = "5";
d = 5;
let e = ["apple", "banana"];
e.push("cherry");
console.log(a, b, c, d, e);
//tsc > js로 컴파일
//ts-node src/index.ts
// 함수 예제 (number 인자 두개를 받고, number타입의 값을 리턴)
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(3, 7));
export {};
//# sourceMappingURL=index.js.map