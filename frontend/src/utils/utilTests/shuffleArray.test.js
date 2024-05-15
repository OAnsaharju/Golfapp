const shuffleArray = require("../shuffleArray");

const testArray = ["one", "two", "three", "four"];

test("if returns randomized array of strings", () => {
  expect(shuffleArray(testArray)).not.toEqual(["one", "two", "three", "four"]);
});
