const testFunc = (element) => {
  element ??= document.createElement(`h2`);
  console.log(element);
  element.id = `아이디1` ?? `아이디2`;
  element.innerText = element.textContent == "" ? `킥킥` : `킼킼`;
  console.log(element);
};

testFunc(document.querySelector(`#h2`));
