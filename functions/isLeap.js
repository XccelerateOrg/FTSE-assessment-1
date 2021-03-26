/**
 * @description isDivisibleBy() should take two numbers as the input,
 * and return true if the first one is divisible by the second
 * @param {number} n
 * @param {number} k
 * @return {boolean} whether n is divisible by k
 */
// YOUR CODE HERE
function isDivisibleBy(n,k){
    return n%k==0;
}


/**
 * @description isLeap() should take a number, year, as the input,
 * and return true if that year is a leap year, and false otherwise.
 * Leap year in the Gregorian calendar is defined as follow:
 * Every year that is evenly divisible by 4,
 * except every year that is evenly divisible by 100,
 * unless the year is also evenly divisible by 400
 * You could use isDivisibleBy() as a helper function 

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

function isLeap(year){
    if(!isDivisibleBy(year,4)){
        return false;
    } else if (!isDivisibleBy(year,100)){
        return true;
        } else if (isDivisibleBy(year,4) && isDivisibleBy(year,100) && isDivisibleBy(year,400)){
            return true;
        } else {
            return false;
        }
}



module.exports = isLeap;
