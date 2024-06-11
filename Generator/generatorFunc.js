// ----------------------------------- 첫 번째 방법
// const testGenFunc = function* (a, b) {
//   yield a;
//   yield b;
// };
// let str = "";
// for (let val of testGenFunc(`음`, `바페`)) {
//   str += val;
// }

// console.log(testGenFunc(`호`, `날두`).next());
// console.log(str);
// // -----------------------------------
// // ----------------------------------- 두 번째 방법

// let str2 = "";
// for (let val of (function* (a, b) {
//   yield a;
//   yield b;
// })(`테스트`, `함수`)) {
//   str2 += val;
// }

// console.log(str2);
// -----------------------------------
// ----------------------------------- 세 번째 방법
const thirdGenerator = function* () {}.constructor;
const a = `테스트`;
const b = `테스트2`;
const c = `테스트3`;
const d = `테스트4`;
const test = new thirdGenerator(`yield "${a}", yield "${b}"`);
console.log(test().next());
console.log((test().next().done = true));
// -----------------------------------
