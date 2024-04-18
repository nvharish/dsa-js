const { linearSearch } = require("../../src/arrays/searching");

const arr = [12, 10, 15, 8, 25, 7];

test(`20 is not exists in the array (${arr})`, () => {
  let ele = 20;
  expect(linearSearch(arr, ele)).toBe(-1);
});

test(`15 is exists in the array (${arr})`, () => {
  let ele = 15;
  expect(linearSearch(arr, ele)).toBe(2);
});
