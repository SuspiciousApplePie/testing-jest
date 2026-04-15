import { caesarCipher } from "./caesarCipher";

test("Caesar Cipher", () => {
  expect(caesarCipher("a", 1)).toBe("b");
  expect(caesarCipher("b", 2)).toBe("d");
  expect(caesarCipher("c", 3)).toBe("f");
  expect(caesarCipher("a", 3)).toBe("d");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("yyyyy", 3)).toBe("bbbbb");
  expect(caesarCipher("A", 3)).toBe("D");
  expect(caesarCipher("A.....B", 3)).toBe("D.....E");
  expect(caesarCipher("     A", 2)).toBe("     C");
  expect(caesarCipher("123456", 4)).toBe("123456");
  expect(caesarCipher(123456, 2)).toBe("Not a string");
  expect(caesarCipher("A", null)).toBe("Enter a valid key");
  expect(caesarCipher("AB", 0)).toBe("AB");
  expect(caesarCipher("AB", "Kokok")).toBe("Enter a valid key");
  expect(caesarCipher("AB", console.log)).toBe("Enter a valid key");
  expect(caesarCipher(String, console.log)).toBe("Not a string");
  expect(caesarCipher("AB", Infinity)).toBe("Enter a valid key");
  expect(caesarCipher("Infinity", 2)).toBe("Kphkpkva");
});
