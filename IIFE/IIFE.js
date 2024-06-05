const IIFE = (a, b) => {
  let first = a;
  const second = b;

  ((callback) => {
    // first++;
    callback(first + second);
  })((test) => {
    console.log(test);
  });
};

IIFE(1, 2);
