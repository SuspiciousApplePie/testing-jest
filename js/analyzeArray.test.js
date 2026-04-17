import { analyzeArray } from "./analyzeArray";

test("Analyze array", () => {
  expect(analyzeArray([1, 2])).toEqual({
    average: 2,
    min: 1,
    max: 2,
    length: 2,
  });
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
  expect(analyzeArray([2, 6, 8, 4])).toEqual({
    average: 5,
    min: 2,
    max: 8,
    length: 4,
  });
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 4,
  });
  expect(analyzeArray([-1, -4, -6, -3])).toEqual({
    average: -3,
    min: -6,
    max: -1,
    length: 4,
  });
  expect(analyzeArray("Jabao")).toBe("Item is not an array");
  expect(analyzeArray(console.log)).toBe("Item is not an array");
  expect(analyzeArray(["jabo", 2, 1, 2, "jabo"])).toBe(
    "Array contains invalid data",
  );
  expect(analyzeArray([Infinity, 1, 2])).toBe("Array contains invalid data");
  expect(analyzeArray([1, 1, -Infinity])).toBe("Array contains invalid data");
  expect(analyzeArray([undefined, 1, 2])).toBe("Array contains invalid data");
  expect(analyzeArray([NaN, 1, 2])).toBe("Array contains invalid data");
  expect(analyzeArray([NaN])).toBe("Array contains invalid data");
  expect(analyzeArray([console.log, 1, null])).toBe(
    "Array contains invalid data",
  );
});
