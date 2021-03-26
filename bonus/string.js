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
 * When you would use it: To find the index of characters in a string
 ***********************************************/
// CODE HERE
let string = 'The food is nice';
console.log(string.indexOf('e'));
console.log(string.indexOf('food'));

/**********************************************
 * string.toUpperCase()
 * ==================================
 * When you would use it: To convert lower case characters to uppercase.
 ***********************************************/
// CODE HERE
let string = 'hello world!';
string = string.toUpperCase();
console.log(string);

/**********************************************
 * parseInt(string)
 * ==================================
 * When you would use it: To parse a string and return an integer.
 ***********************************************/
// CODE HERE
let string = 11
let stringToNum = parseInt(string);
console.log(typeof stringToNum == "number");

/**********************************************
 * number.toString()
 * ==================================
 * When you would use it: To convert a number to a string
 ***********************************************/
// CODE HERE
let num = 11
let numToString = num.toString();
console.log(typeof numToString == "string")

/**********************************************
 * string.charAt(index)
 * ==================================
 * When you would use it: To access characters of a string without using the bracket notation
 ***********************************************/
// CODE HERE
console.log('hello'[1]);
console.log('hello'.charAt(1));


/**********************************************
 * string.split("")
 * ==================================
 * When you would use it: To split up sub strings of a string into an array
 ***********************************************/
// CODE HERE
let string = 'Split up sub strings of a string into an array';
console.log(myString.split(' '));

/**********************************************
 * string.trim()
 * ==================================
 * When you would use it: To remove whitespace characters from the beginning and end of a string. 
 * Whitespace characters are spaces, newlines, tabs etc.
 ***********************************************/
// CODE HERE
let string = '     hello world      ';
console.log(string.trim());
