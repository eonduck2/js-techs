function getFunc() {
  let value = "test";

  return new Function(`console.log("${value}")`);
}

const testFunc = getFunc(`테스트`);
testFunc();
