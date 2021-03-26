/**********************************************
 * Array Methods
 * ==================================
 * Provide your own example for each array method below,
 * explaining when you would use each one (it would be even better if you could give a real life example!)
 *
 * Use the documentation as provided here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * To run the file, go to your terminal, cd into this folder, and type in node array.js
 *
 ***********************************************/

const { log } = require("console");

/**********************************************
 * array.includes()
 * ==================================
 * When you would use it: to see if a set of data has a specific email
 ***********************************************/
let teachers = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
let sam = "sam@x.co";
console.log(teachers.includes(sam));

/**********************************************
 * array.slice()
 * ==================================
 * When you would use it: to extract the luxury cars brand from array
 ***********************************************/
// CODE HERE
const array = [ 'Honda', 'Toyota', 'farrier', 'maserati', 'lamborghini']
console.log(array.slice(2))
/**********************************************
 * array.splice()
 * ==================================
 * When you would use it: delect Janpan car brand and add another brand
 ***********************************************/
// CODE HERE
const array = [ 'Honda', 'Toyota', 'farrier', 'maserati', 'lamborghini']
carBrand.splice(0,1,'BMW','BENZ')
console.log(array)
/**********************************************
 * array.indexOf()
 * ==================================
 * When you would use it: to find a specific brand
 ***********************************************/
// CODE HERE
const array = [ 'Honda', 'Toyota', 'farrier', 'maserati', 'lamborghini'];
console.log(array.indexOf('Toyota'))
/**********************************************
 * array.sort()
 * ==================================
 * When you would use it: to sort the names
 ***********************************************/
// CODE HERE
const array = [ 'Honda', 'Toyota', 'farrier', 'maserati', 'lamborghini'];
console.log(array.sort())

/**********************************************
 * array.concat()
 * ==================================
 * When you would use it:concat array
 ***********************************************/
// CODE HERE

let carBrand1 = ['Honda', 'Toyota', 'farrier'];
let carBrand2 = ['maserati', 'lamborghini'];
let children = carBrand1.concat(carBrand2);

/**********************************************
 * array.unshift()
 * ==================================
 * When you would use it:add new things into array at the beginning
 ***********************************************/
// CODE HERE
const array = [ 'Honda', 'Toyota', 'farrier'];
array.unshift("Hi");
console.log(array);

/**********************************************
 * array.shift()
 * ==================================
 * When you would use it:remove the first string from array
 ***********************************************/
// CODE HERE
const array = [ 'Honda', 'Toyota', 'farrier'];
array.shift('Honda');
console.log(array);