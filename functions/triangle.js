/**
 * @description isEquilateral() should take 3 numbers as the input,
 * each input represents a side of the triangle
 * it returns true if the triangle an equilateral triangle
 * A triangle is equilateral if the length of all sides are equal
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean} whether the triangle is equilateral
 */
// YOUR CODE HERE
function isEquilateral(a, b, c) {
  if ((a === b) && (b === c)) {
    return true;
  } else {
    return false;
  }
}

/**
 * @description isIsosceles() should take 3 numbers as the input,
 * each input represents a side of the triangle
 * it returns true if the triangle an isosceles triangle
 * A triangle is isosceles if the length at least two sides are equal
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean} whether the triangle is isosceles
 */
// YOUR CODE HERE
function isIsosceles(a, b, c) {
  if (a === b || a === c || b === c) {
    return true;
  } else {
    return false;
  }
}
/**
 * @description isScalene() should take 3 numbers as the input,
 * each input represents a side of the triangle
 * it returns true if the triangle an scalene triangle
 * A triangle is scalene if it has all sides of different lengths
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean} whether the triangle is scalene
 */
// YOUR CODE HERE
function isScalene(a, b, c) {
  if (a != b && b != c && c != a) {
    return true;
  } else {
    return false;
  }
}
/**
 * @description isRight() should take 3 numbers as the input,
 * each input represents a side of the triangle
 * it returns true if the triangle an right triangle
 * A triangle is right if one side squared is the sum of the squares of the 2 other sides
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {boolean} whether the triangle is right
 */
// YOUR CODE HERE
function isRight(a, b, c) {
  if ((Math.pow(a, 2) + Math.pow(b, 2)) == Math.pow(c, 2) || (Math.pow(a, 2) + Math.pow(c, 2)) == Math.pow(b, 2) || (Math.pow(b, 2) + Math.pow(c, 2)) == Math.pow(a, 2)) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isEquilateral,
  isIsosceles,
  isScalene,
  isRight,
};