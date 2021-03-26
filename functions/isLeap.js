/**
 * @description isDivisibleBy() should take two numbers as the input,
 * and return true if the first one is divisible by the second
 * @param {number} n
 * @param {number} k
 * @return {boolean} whether n is divisible by k
 */

// ******logic*******
// 
// isDivisibleBy() two numbers as input
// if one is % by the second return true


// YOUR CODE HERE

function isDivisibleBy(n,k) {
   
    if (n % k === 0) {
        return true; 
     }
}


/**
 * @description isLeap() should take a number, year, as the input,
 * and return true if that year is a leap year, 
 *  and false otherwise.
 * 
 * Leap year in the Gregorian calendar is defined as follow:
 * Every year that is evenly divisible by 4,
 * 
 * except every year that is evenly divisible by 100,
 * 
 * unless the year is also evenly divisible by 400
 * 
 * You could use isDivisibleBy() as a helper function 
 * if 
 * able to divide by 4
 * but not diviable by 100 unless its divisible by 400

input: 1900
output: false 

input: 2000
output: true

input: 2020
output: true

 * @param {number} year
 * @return {boolean} whether the year is leap
 */

// YOUR CODE HERE
function isLeap(year) {
   
    if (year % 400 === 0) {
        return true; 
     } else
     if (year % 4 === 0 && year % 100 !== 0) {
     return true;
    } else
    return false;
}


module.exports = isLeap;
