export function analyzeArray(numbers) {
  if (!Array.isArray(numbers)) return "Item is not an array";
  if (doesArrayContainInvalidData(numbers))
    return "Array contains invalid data";
  return numbers.reduce(
    (accumulator, number, index) => {
      const helpers = [
        setMinNumber(accumulator, number),
        setMaxNumber(accumulator, number),
        setAverage(accumulator, number, index, numbers.length),
      ];
      helpers.forEach((helper) => {
        accumulator = helper;
      });

      return accumulator;
    },
    { length: numbers.length },
  );
}

function setMinNumber(accumulator, number) {
  if (!Object.hasOwn(accumulator, "min") || accumulator.min > number) {
    accumulator.min = number;
  }
  return accumulator;
}

function setMaxNumber(accumulator, number) {
  if (!Object.hasOwn(accumulator, "max") || accumulator.max < number) {
    accumulator.max = number;
  }
  return accumulator;
}

function setAverage(accumulator, number, index, length) {
  if (!Object.hasOwn(accumulator, "average")) {
    accumulator.average = number;
  } else if (index === length - 1) {
    accumulator.average += number;
    accumulator.average = Math.round(accumulator.average / length);
  } else {
    accumulator.average += number;
  }
  return accumulator;
}

function doesArrayContainInvalidData(numbers) {
  const hasString = numbers.find((number) => typeof number !== "number");
  const hasInvalidNumbers =
    numbers.includes(undefined) ||
    numbers.includes(null) ||
    numbers.includes(Infinity) ||
    numbers.includes(NaN) ||
    numbers.includes(true);

  if (hasString || hasInvalidNumbers) return true;
}
