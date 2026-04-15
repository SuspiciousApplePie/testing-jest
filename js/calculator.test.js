import { addition, subtraction, multiplication, division } from "./calculator";

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
  expect(addition("kok", 1)).toBe("Enter a number");
});

test("Subtraction", () => {
  expect(subtraction(1, 1)).toBe(0);
  expect(subtraction(0, 1)).toBe(-1);
  expect(subtraction(1, 0)).toBe(1);
  expect(subtraction(0, 0)).toBe(0);
  expect(subtraction(null, 1)).toBe("Enter a minuend.");
  expect(subtraction(1, null)).toBe("Enter a subtrahend.");
  expect(subtraction(undefined, NaN)).toBe("Enter subtraction values.");
  expect(subtraction("kok", 1)).toBe("Enter a valid minuend.");
  expect(subtraction(1, "korokok")).toBe("Enter a valid subtrahend.");
  expect(subtraction("kok", "korokok")).toBe("Enter valid subtraction values.");
  expect(subtraction(null, null)).toBe("Enter subtraction values.");
  expect(subtraction(String, console.log)).toBe(
    "Enter valid subtraction values.",
  );
  expect(subtraction(-1, -1)).toBe(0);
  expect(subtraction("Infinity", 1)).toBe("Enter a valid minuend.");
  expect(subtraction(1, Infinity)).toBe("Enter a valid subtrahend.");
  expect(subtraction("123", 1)).toBe(122);
  expect(subtraction(null, Infinity)).toBe("Enter a minuend.");
  expect(subtraction(false, true)).toBe("Enter valid subtraction values.");
});

test("Multiplication", () => {
  expect(multiplication(3, 5)).toBe(15);
  expect(multiplication(0, 0)).toBe(0);
  expect(multiplication(2, -25)).toBe(-50);
  expect(multiplication(null, 5)).toBe("Enter valid values");
  expect(multiplication(NaN, NaN)).toBe("Enter valid values");
  expect(multiplication("kok", 5)).toBe("Enter valid values");
  expect(multiplication(5, "korokok")).toBe("Enter valid values");
  expect(multiplication("korokok", "korokok")).toBe("Enter valid values");
  expect(multiplication(Infinity, Infinity)).toBe("Enter valid values");
  expect(multiplication(undefined, undefined)).toBe("Enter valid values");
  expect(multiplication("true", "true")).toBe("Enter valid values");
  expect(multiplication(console.log, String)).toBe("Enter valid values");
});

test("Division", () => {
  expect(division(5, 2)).toBe(2.5);
  expect(division(2, 5)).toBe(0.4);
  expect(division(0, 5)).toBe(0);
  expect(division(5, 0)).toBe("Can't divide by zero");
  expect(division(null, null)).toBe("Enter valid values");
  expect(division(undefined, undefined)).toBe("Enter valid values");
  expect(division(undefined, 1)).toBe("Enter valid values");
  expect(division(1, undefined)).toBe("Enter valid values");
  expect(division("kok", "kok")).toBe("Enter valid values");
  expect(division(1, "kok")).toBe("Enter valid values");
  expect(division("kok", 1)).toBe("Enter valid values");
  expect(division(console.log, String)).toBe("Enter valid values");
  expect(division(Infinity, Infinity)).toBe("Enter valid values");
  expect(division(1, Infinity)).toBe("Enter valid values");
  expect(division(Infinity, 1)).toBe("Enter valid values");
  expect(division("5", "2")).toBe(2.5);
});
