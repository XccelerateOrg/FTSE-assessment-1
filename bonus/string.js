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
 * When you would use it: to find out the index of the first instance of a specific character in the string
 ***********************************************/
// CODE HERE
let index = string.indexOf("4");
console.log(index) // although there are two 4s in the number, the function will return the index of the first "4"

/**********************************************
 * string.toUpperCase()
 * ==================================
 * When you would use it: to capitalise a certain string/ character, used very frequently when we are trying to control user input and edge cases, for example, we want all names in our database to be capitalised for consistency
 ***********************************************/
// CODE HERE
let names = ["Justin", "LeSlEy", "sam", "AKa", "lEViNe"]
let caps = []
for (n of names) {
    caps.push(n.toUpperCase())
}
console.log(caps); // [ 'JUSTIN', 'LESLEY', 'SAM', 'AKA', 'LEVINE' ] looks a lot better

/**********************************************
 * parseInt(string)
 * ==================================
 * When you would use it: to convert numbers into different base i.e. binary/ hexidecimal, very handy for some math/ computational conversion
 ***********************************************/
// CODE HERE
let original = 100012; 
let radix = 2;
let binary = parseInt(original, radix); 
console.log(binary); // 100012 in binary has the equivalent decimal value of 17
radix = 16;
let hex = parseInt(original, radix)
console.log(hex); // 100012 in hex has the equivalent decimal value of 1048594

/**********************************************
 * number.toString()
 * ==================================
 * When you would use it: when we want to convert a number to string, for example changing an integer to phone number, also toString is frequently used by other functions behind the scene for type conversion
 ***********************************************/
// CODE HERE
let integer = 98765432;
let formatted = integer.toString();
let phoneNum = "+852" + " " + formatted;
console.log(phoneNum);

/**********************************************
 * string.charAt(index)
 * ==================================
 * When you would use it: to access a character in string by index, frequenctly used in for loops that operates on a string, for example, we want to capitalise the first char of each name
 ***********************************************/
// CODE HERE
let cities = ["paris", "berlin", "beijing", "london", "toronto"];
let capCities = [];
for (city of cities) {
    let temp = "";
    temp = city.charAt(0).toUpperCase() + city.substring(1, city.length);
    capCities.push(temp);
}
console.log(capCities); // Since all city's charAt(0) are capitalised, we now have [ 'Paris', 'Berlin', 'Beijing', 'London', 'Toronto' ]

/**********************************************
 * string.split("")
 * ==================================
 * When you would use it: to separate sections of a long string by a certain string, most frequently used separator is a space
 ***********************************************/
// CODE HERE
let longString = "Ray Karl Justin Caspar Pon"
let separated = [];
separated = longString.split(" ");
console.log(separated); // We now have an array of iterable names [ 'Ray', 'Karl', 'Justin', 'Caspar', 'Pon' ]

/**********************************************
 * string.trim()
 * ==================================
 * When you would use it: to remove white spaces before and after strings, frequently used to standarise user input and prevent ugly data
 ***********************************************/
// CODE HERE
let before = "    I want to print this   ";
console.log(before);
let after = before.trim();
console.log(after); // No more unnecessary white spaces!
