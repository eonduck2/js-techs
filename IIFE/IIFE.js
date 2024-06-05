const IIFE = (a, b) => {
  const first = a;
  const second = b;
  (() => {
    console.log(first, second);
  })();
};

IIFE(1, 2);
