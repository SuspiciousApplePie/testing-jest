import { addition } from "./calculator";

test("Addition", () => {
  expect(addition(2, 2)).toBe(4);
  expect(addition(0, 0)).toBe(0);
  expect(addition(0, 1)).toBe(1);
  expect(addition(1, 0)).toBe(1);
  expect(addition(NaN, undefined)).toBe("Enter a number");
  expect(addition()).toBe("Enter a number");
  expect(addition(1, "kok")).toBe("Enter a number");
  expect(addition("kok", 1)).toBe("Enter a number");
  expect(addition(1)).toBe("Enter a number");
  expect(addition(null, null)).toBe("Enter a number");
  expect(addition(console.log, String)).toBe("Enter a number");
  expect(addition("kok", "korokok")).toBe("Enter a number");
  expect(addition(-2, -5)).toBe(-7);
});
