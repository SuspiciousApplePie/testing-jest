export function addition(addend1, addend2) {
  const isNotANumber = isNaN(addend1) || isNaN(addend2);
  const isFalsy = (!addend1 && addend1 !== 0) || (!addend2 && addend2 !== 0);
  if (isFalsy || isNotANumber) return "Enter a number";
  return addend1 + addend2;
}

export function subtraction(minuend, subtrahend) {
  const [isFiniteMinuend, isFiniteSubtrahend] = [
    isFinite(minuend),
    isFinite(subtrahend),
  ];

  const [isMinuendBoolean, isSubtrahendBoolean] = [
    typeof minuend === "boolean",
    typeof subtrahend === "boolean",
  ];
  const [isFalsyMinuend, isFalsySubtrahend] = [
    !minuend && minuend !== 0,
    !subtrahend && subtrahend !== 0,
  ];
  if (isFalsyMinuend && isFalsySubtrahend) return "Enter subtraction values.";
  if (
    (!isFiniteMinuend && !isFiniteSubtrahend) ||
    (isMinuendBoolean && isSubtrahendBoolean)
  )
    return "Enter valid subtraction values.";
  if (!isFiniteMinuend || isMinuendBoolean) return "Enter a valid minuend.";
  if (isFalsyMinuend) return "Enter a minuend.";
  if (!isFiniteSubtrahend || isSubtrahendBoolean)
    return "Enter a valid subtrahend.";
  if (isFalsySubtrahend) return "Enter a subtrahend.";
  return minuend - subtrahend;
}

export function multiplication(factor1, factor2) {
  const isNumberFinite = isFinite(factor1) && isFinite(factor2);
  const isFalsy = (!factor1 && factor1 !== 0) || (!factor2 && factor2 !== 0);
  if (isFalsy || !isNumberFinite) return "Enter valid values";
  return factor1 * factor2;
}
