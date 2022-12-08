const padNumber = (input, digits) => {
  let number = input.toString();
  if (number.length > digits) {
    return input;
  }
  return new Array(digits - number.length).fill("0").join("") + number;
};

export default padNumber;
