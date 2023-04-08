// so that each function can have unlimited arguments
const all =
  fn =>
  (...list) =>
    list.reduce(fn);

const add = all((a, b) => a + b);
const subtract = all((a, b) => a - b);
const multiply = all((a, b) => a * b);
const divide = all((a, b) => a / b);
const modulo = all((a, b) => a % b);
const max = Math.max;
const min = Math.min;

const log = console.log;
const upcase = str => str.toUpperCase();
const downcase = str => str.toLowerCase();

const environment = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  max,
  min,
  map,
  upcase,
  downcase,
  log,
  pi: Math.PI,
};

module.exports = { environment };
