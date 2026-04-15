const small = "abcdefghijklmnopqrstuvwxyz";
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function caesarCipher(word, key) {
  if (!isString(word)) return "Not a string";
  if (!isValidKey(key)) return "Enter a valid key";
  return encryptWord(word, key);
}

function encryptWord(word, key) {
  const characters = word.split("");
  const encrypted = characters.map((character) => {
    return encryptLetter(character, key);
  });
  return encrypted.join("");
}

function encryptLetter(character, key) {
  if (small.includes(character)) {
    const pos = small.indexOf(character);
    return small.charAt((pos + key) % 26);
  } else if (capital.includes(character)) {
    const pos = capital.indexOf(character);
    return capital.charAt((pos + key) % 26);
  } else {
    return character;
  }
}

function isString(word) {
  if (typeof word === "string") return true;
}

function isValidKey(key) {
  if ((key && isFinite(key)) || key === 0) return true;
}
