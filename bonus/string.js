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
 * When you would use it: to find out the position of a letter in alphabet.
 ***********************************************/
// CODE HERE
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let vposition = alphabet.indexOf("v")+1;
console.log(vposition);

/**********************************************
 * string.toUpperCase()
 * ==================================
 * When you would use it: change all letters to uppercase
 ***********************************************/
// CODE HERE

let word = "Word!";
let upWord = word.toUpperCase();
console.log(upWord);

/**********************************************
 * parseInt(string)
 * ==================================
 * When you would use it: to convert string obtained from form submission to integer
 ***********************************************/
// CODE HERE

let age = "18";
console.log(parseInt(age));

/**********************************************
 * number.toString()
 * ==================================
 * When you would use it: change the number to string type
 ***********************************************/
// CODE HERE

let years=3;
let yearsInString= years.toString();
console.log(yearsInString);

/**********************************************
 * string.charAt(index)
 * ==================================
 * When you would use it:return the character at specified index of a string
 ***********************************************/
// CODE HERE

let  oops ="I cannot think of any examples anymore."
let charOfZeroIndex = oops.charAt(0);
console.log(charOfZeroIndex);


/**********************************************
 * string.split("")
 * ==================================
 * When you would use it: split the sentence into an array of words.
 ***********************************************/
// CODE HERE

let fingercross ="This is the last question";
let arrayFingercross = fingercross.split(" ");
console.log(arrayFingercross);
/**********************************************
 * string.trim()
 * ==================================
 * When you would use it:removes whitespace from both sides of a string
 ***********************************************/
// CODE HERE
let yay ="   It's the last one finally!!!!    ";
let trimYay = yay.trim();
console.log(trimYay);
