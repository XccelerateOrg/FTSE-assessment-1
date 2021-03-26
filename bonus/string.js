/**********************************************
 * String Methods
 * ==================================
 * Provide your own example for each string method below,
 * explaining when you would use each one (it would be even better if you could give a real life example!)
 *
 * Use the documentation as provided here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *
 * To run the file, go to your terminal, cd into this folder, and type in node string.js
 *
 ***********************************************/

/**********************************************
 * string.substring()
 * ==================================
 * When you would use it: To see if a number includes a zipcode
 ***********************************************/
let string = "+85292343234";
let isItHongKong = string.substring(0, 4);
console.log(isItHongKong);

/**********************************************
 * string.indexOf()
 * ==================================
 * When you would use it: to find the location of a the given word.
 ***********************************************/
// CODE HERE

let str = 'eating some peanut butter sandwiches';
let index = str.indexOf('butter');
console.log(index); 

/**********************************************
 * string.toUpperCase()
 * ==================================
 * When you would use it: converts a string to uppercase, one case would be to visually enhance important words.
 ***********************************************/
// CODE HERE
var hi = "Hello World!";
var res = hi.toUpperCase();
console.log(res);

/**********************************************
 * parseInt(string)
 * ==================================
 * When you would use it: to convert strings to numbers
 ***********************************************/
// CODE HERE
let hello = "33";
console.log(parseInt(hello));

/**********************************************
 * number.toString()
 * ==================================
 * When you would use it: when you want to create strings using only this data type.
 ***********************************************/
// CODE HERE
console.log((1987).toString());

/**********************************************
 * string.charAt(index)
 * ==================================
 * When you would use it: returns a single character using the char.at
 ***********************************************/
// CODE HERE
const sentence = 'I miss my dog so much.';
const dog = 10;
console.log(sentence.charAt(dog));

/**********************************************
 * string.split("")
 * ==================================
 * When you would use it: splits the strings into ordered substrings which is then placed into an array.
 ***********************************************/
// CODE HERE
const animal = 'The turtle is faster than the rabbit.';
const pet = animal.split(' ');
console.log(pet[1]);
/**********************************************
 * string.trim()
 * ==================================
 * When you would use it: removes any whitespace at either end of the string.
 ***********************************************/
// CODE HERE
const greeting = '   I am finished   ';
console.log(greeting.trim());
