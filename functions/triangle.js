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
function isEquilateral(a, b, c) {
  return (a == b && b == c);
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

function isIsosceles( a, b, c ) {
  return ( (a == b) || (a == c) || (b == c));
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

function isScalene( a, b, c ) {
  return ( (a != b) && (a != c) && (b != c));
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


function isRight( a, b, c ) {
    return (
    ((a*a) + (b*b)) == (c*c) 
    || 
    ((a*a) + (c*c)) == (b*b)
    || 
    ((b*b) + (c*c)) == (a*a))
}
  



module.exports = {
  isEquilateral,
  isIsosceles,
  isScalene,
  isRight,
};
