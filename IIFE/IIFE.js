const IIFE = (a, b) => {
  let first = a;
  const second = b;
  console.log(first);
  ((age) => {
    console.log(age);
    first = age;
    console.log(first);
  })(20);
};

IIFE(1, 2);
