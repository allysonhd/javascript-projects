// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

let divide = function (numerator, denominator) {
  result = numerator / denominator;
  if (denominator === 0) {
    throw Error("You cannot divide by zero!");
  }
  return result;
};
console.log(divide(15, 3));
