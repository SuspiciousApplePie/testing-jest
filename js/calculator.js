export function addition(addend1, addend2) {
  const isNotANumber = isNaN(addend1) || isNaN(addend2);
  const isFalsy = (!addend1 && addend1 !== 0) || (!addend2 && addend2 !== 0);
  if (isFalsy || isNotANumber) return "Enter a number";
  return addend1 + addend2;
}

export function subtraction(minuend, subtrahend) {
  const [isNotANumberMinuend, isNotANumberSubtrahend] = [
    isNaN(minuend),
    isNaN(subtrahend),
  ];
  const [isFalsyMinuend, isFalsySubtrahend] = [
    !minuend && minuend !== 0,
    !subtrahend && subtrahend !== 0,
  ];
  if (isFalsyMinuend && isFalsySubtrahend) return "Enter subtraction values.";
  if (isNotANumberMinuend && isNotANumberSubtrahend)
    return "Enter valid subtraction values.";
  if (isNotANumberMinuend) return "Enter a valid minuend.";
  if (isNotANumberSubtrahend) return "Enter a valid subtrahend.";
  if (isFalsyMinuend) return "Enter a minuend.";
  else if (isFalsySubtrahend) return "Enter a subtrahend.";
  return minuend - subtrahend;
}
