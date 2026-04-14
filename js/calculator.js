export function addition(addend1, addend2) {
  const isNotANumber = isNaN(addend1) || isNaN(addend2);
  const isFalsy = (!addend1 && addend1 !== 0) || (!addend2 && addend2 !== 0);
  if (isFalsy || isNotANumber) return "Enter a number";
  return addend1 + addend2;
}
