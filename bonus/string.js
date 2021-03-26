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
 * When you would use it:
 ***********************************************/
// CODE HERE
let Fine = "I'm fine today";
let searchFine = "today";

console.log(Fine.indexOf("I"))
console.log(Fine.indexOf(searchFine))
console.log(Fine.indexOf(searchFine,9))
console.log(Fine.indexOf(searchFine,10))

/**********************************************
 * string.toUpperCase()
 * ==================================
 * When you would use it:
 ***********************************************/
// CODE HERE
let Abbreviated_name = "kfc";
kfc_Abbreviated_name = Abbreviated_name.toUpperCase()
console.log(Abbreviated_name)
console.log(kfc_Abbreviated_name)

/**********************************************
 * parseInt(string)
 * ==================================
 * When you would use it:
 ***********************************************/
// CODE HERE
console.log(parseInt("How are you"))
console.log(parseInt("1"))
console.log(parseInt("  1 "))
console.log(parseInt("100"))
console.log(parseInt("1.1111"))
console.log(parseInt("0x10"))
console.log(parseInt("0x10",8))
console.log(parseInt("10",8))

/**********************************************
 * number.toString()
 * ==================================
 * When you would use it:
 ***********************************************/
// CODE HERE
let count = 103

console.log(count.toString())    // displays '103'
console.log((28).toString())     // displays '28'
console.log((3.26).toString())   // displays '3.26'

let x = 18

console.log(x.toString(2))       // displays '10010'
console.log((254).toString(16))  // displays 'fe'

console.log((-10).toString(2))   // displays '-1010'
console.log((-0xff).toString(8)) // displays '-377'

/**********************************************
 * string.charAt(index)
 * ==================================
 * When you would use it:
 ***********************************************/
// CODE HERE
const sentence = "The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.";

console.log("The character at index 0  is " + sentence.charAt())
console.log("The character at index 0  is " + sentence.charAt(100))
console.log("The character at index 0  is " + sentence.charAt(1000))



/**********************************************
 * string.split("")
 * ==================================
 * When you would use it:
 ***********************************************/
// CODE HERE
const sentence_c = "The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.";

console.log(sentence_c.split(""))
console.log(sentence_c.split(" "))
console.log(sentence_c.split("",3))
console.log(sentence_c.split(" ",3))
console.log(sentence_c.split(" the ",2))




/**********************************************
 * string.trim()
 * ==================================
 * When you would use it:
 ***********************************************/
// CODE HERE
const final_sentence = "I am reday to finish it!      "
const Goodbye = "     Goodbye  la     "
console.log(final_sentence.trim())
console.log(Goodbye.trim())