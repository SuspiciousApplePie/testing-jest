export function capitalize(word) {
  if (!word) return "Enter a word";
  if (typeof word !== "string") return "Not a word";
  const cleanedWord = word.trim();
  const firstLetter = cleanedWord.charAt(0).toUpperCase();
  if (!firstLetter) return "Enter a word";
  const rest = cleanedWord.slice(1);
  const capitalizedWord = firstLetter.concat(rest);
  return capitalizedWord;
}
