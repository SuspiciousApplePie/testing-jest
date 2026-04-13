import { capitalize } from "./capitalize.js";

test("Capitalize", () => {
  expect(capitalize("a")).toBe("A");
  expect(capitalize("c")).toBe("C");
  expect(capitalize("cool")).toBe("Cool");
  expect(capitalize("222a222")).toBe("222a222");
  expect(capitalize(null)).toBe("Enter a word");
  expect(capitalize(" ava wangis")).toBe("Ava wangis");
  expect(capitalize(12346)).toBe("Not a word");
  expect(capitalize(" ")).toBe("Enter a word");
  expect(capitalize("###3")).toBe("###3");
});
