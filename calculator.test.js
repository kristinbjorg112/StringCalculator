const add = require('./calculator');

it("Should return zero on an empty srting", () => { 
  expect(add("")).toBe(0);
});

 it("Should return number when only one number is in the string", () => { 
  expect(add("5")).toBe(5);
});