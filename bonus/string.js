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
 * When you would use it: check if the specific word is in the sentence
 ***********************************************/
let person = "I think Justin is cool"
console.log(person.indexOf("Justin"))

/**********************************************
 * string.toUpperCase()
 * ==================================
 * When you would use it: capitalize words
 ***********************************************/
let randomWords = " SDsad sd sads asd"
console.log(randomWords.toUpperCase())

/**********************************************
 * parseInt(string)
 * ==================================
 * When you would use it: to turn string to no.
 ***********************************************/
 let string1 = "100"
 console.log(typeof(parseInt(string1)))// CODE HERE

/**********************************************
 * number.toString()
 * ==================================
 * When you would use it: to turn no. to string
 ***********************************************/
let num = 100
console.log(typeof(num.toString()))


/**********************************************
 * string.charAt(index)
 * ==================================
 * When you would use it: Return the character of a string:


 ***********************************************/
console.log("Justin".charAt(0))

/**********************************************
 * string.split("")
 * ==================================
 * When you would use it: To splite names into array
 ***********************************************/
let longNames = "Justin Jason Tom Peter"
console.log(longNames.split(" "))

/**********************************************
 * string.trim()
 * ==================================
 * When you would use it: moves whitespace from both ends of a string
 ***********************************************/
let nameIs = "     Justin Cheung  is       good     "
console.log(nameIs.trim())






