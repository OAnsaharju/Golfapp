const shuffleArray = require("../shuffleArray");

const testArray = ["one", "two", "three", "four"];

// unit tests for basic functionality//

test("if returns randomized array of strings", () => {
  expect(shuffleArray(testArray)).not.toEqual(["one", "two", "three", "four"]);
});

// prototype testing for additional information (performance, time complexity etc...) //
