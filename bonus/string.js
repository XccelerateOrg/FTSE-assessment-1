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
 let string2 = "+85292343234";
 console.log(string2.indexOf(9));

/**********************************************
 * string.toUpperCase()
 * ==================================
 * When you would use it:
 ***********************************************/
 let string3 = "hongkong";
 console.log(string3.toUpperCase());

/**********************************************
 * parseInt(string)
 * ==================================
 * When you would use it:
 ***********************************************/
 let string4 = "+85292343234";
 console.log(parseInt(string4));

/**********************************************
 * number.toString()
 * ==================================
 * When you would use it:
 ***********************************************/
 let string5 = 85292343234;
 console.log(string5.toString());

/**********************************************
 * string.charAt(index)
 * ==================================
 * When you would use it:
 ***********************************************/
 let string6 = "hongkong";
 console.log(string6.charAt(0));

/**********************************************
 * string.split("")
 * ==================================
 * When you would use it:
 ***********************************************/
 let string7 = "hongkong";
 console.log(string7.split("k"));

/**********************************************
 * string.trim()
 * ==================================
 * When you would use it:
 ***********************************************/
 let string8 = "          hongkong            ";
 console.log(string8.trim());
