// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     return {
//       current: this.from,
//       last: this.to,

//       next() {
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };

// console.log([...range]);

// -------------------------------------------------

const testObj = {
  test: `테스트`,
  test2: `테스트2`,
  test3: `테스트3`,
};

testObj[Symbol.iterator] = function* () {
  yield this.test;
  yield this.test2;
  yield this.test3;
};

console.log([testObj]);
