export function reverseString(word) {
  const isValid =
    (!word && word !== 0) ||
    (typeof word !== "number" && typeof word !== "string");
  if (word === "") return "Enter a non-empty string";
  if (isValid) return "Enter a string";
  if (typeof word === "number") word = word.toString();
  const charList = word.split("");
  return charList.reverse().join("");
}
