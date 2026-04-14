import { reverseString } from "./reverseString";

test("Check if it reverse", () => {
  expect(reverseString("Ab")).toBe("bA");
  expect(reverseString("cA")).toBe("Ac");
  expect(reverseString("shinomiya")).toBe("ayimonihs");
  expect(reverseString("kaguya")).toBe("ayugak");
  expect(reverseString()).toBe("Enter a string");
  expect(reverseString(38)).toBe("83");
  expect(reverseString("a")).toBe("a");
  expect(reverseString("Madam Herta")).toBe("atreH madaM");
  expect(reverseString("()#")).toBe("#)(");
  expect(reverseString(String)).toBe("Enter a string");
  expect(reverseString(class Java {})).toBe("Enter a string");
});
