// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🚩🚩🚩 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

let head = function(firstElement) {
  firstElement = firstElement[0];
  return firstElement;
};
console.log(head);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");