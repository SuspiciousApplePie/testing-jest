export function reverseString(word) {
  if (!word || (typeof word !== "number" && typeof word !== "string"))
    return "Enter a string";
  if (typeof word === "number") word = word.toString();
  const charList = word.split("");
  return charList.reverse().join("");
}
