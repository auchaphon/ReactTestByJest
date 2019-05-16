import { oddEven, sum } from "../libs/math";

it("adds 1 + 2 to equal odd", function() {
  var actual = oddEven(1, 2);
  expect(actual).toBe("odd");
});

it("sum 1 + 2 to equal 3", function() {
  var result = sum(1, 2);
  expect(result).toBe(3);
});
