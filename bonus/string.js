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
 * When you would use it: to find the index of string
 ***********************************************/
// CODE HERE
let str = "Hello world"
console.log(str.indexOf('w'))

/**********************************************
 * string.toUpperCase()
 * ==================================
 * When you would use it: capitalise first name in user input
 ***********************************************/
// CODE HERE
let user = "justin"
let capitalise = user[0].toUpperCase() + user.substring(1)
console.log(capitalise)

/**********************************************
 * parseInt(string)
 * ==================================
 * When you would use it: Turn a user input from string to a number 
 ***********************************************/
// CODE HERE
let userInput = "24"
let age = parseInt(userInput);
console.log(age);

/**********************************************
 * number.toString()
 * ==================================
 * When you would use it: To convert number to binary using num.toString(2)
 ***********************************************/
// CODE HERE
function baseTwo(num) {
    return (num >>> 0).toString(2)
}
/**********************************************
 * string.charAt(index)
 * ==================================
 * When you would use it: return first character in given word
 ***********************************************/
// CODE HERE
let word = "Basketball"
console.log(word.charAt(0))
/**********************************************
 * string.split("")
 * ==================================
 * When you would use it: separate first name and last name 
 ***********************************************/
// CODE HERE
let name = "Johnny Bravo"
let separate = name.split(" ")
console.log(firstName = separate[0])
console.log(lastName = separate[1])
/**********************************************
 * string.trim()
 * ==================================
 * When you would use it: removes whitespace when a user puts a space before entering name
 ***********************************************/
// CODE HERE
let name = " Johnny";
console.log(name.trim())