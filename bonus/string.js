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

const { schedulingPolicy } = require("cluster");

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
 * When you would use it:to see if the object is in the string or not
 ***********************************************/
// CODE HERE
const school = "I go to school by Bus."
console.log(school.indexOf('to'))


/**********************************************
 * string.toUpperCase()
 * ==================================
 * When you would use it: converted to uppercase
 ***********************************************/
const school = "I go to school by Bus."
console.log(school.toUpperCase())

/**********************************************
 * parseInt(string)
 * ==================================
 * When you would use it:add number and string
 ***********************************************/
// CODE HERE
let x = 1;
let y = "10000 is my favourite number";
let yInt = Number.parseInt(y)
console.log(x + yInt)


/**********************************************
 * number.toString()
 * ==================================
 * When you would use it:convert number to Hexadecimal
 ***********************************************/
// CODE HERE
(254).toString(16)

/**********************************************
 * string.charAt(index)
 * ==================================
 * When you would use it:
 ***********************************************/
// CODE HERE
let str="Hello world!"
console.log(str.charAt(1))

/**********************************************
 * string.split("")
 * ==================================
 * When you would use it:return string to array
 ***********************************************/
// CODE HERE
let words = "Hello, how are you?"
console.log(words.split(" "))

/**********************************************
 * string.trim()
 * ==================================
 * When you would use it: remove space
 ***********************************************/
// CODE HERE
let words = "                           hi                         "
console.log(words.trim())