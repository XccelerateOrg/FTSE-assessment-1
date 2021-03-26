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
 * When you would use it: slice out a piece of the array based on the indices we provide it 
 ***********************************************/
// CODE HERE
let queue = ['John', 'Peter', 'Mary', 'Jane'];
console.log(queue.slice(2, 4));


/**********************************************
 * array.splice()
 * ==================================
 * When you would use it: adds/removes items to/from an array, and returns the removed item(s)
 ***********************************************/
// CODE HERE
let queue2 = ['John', 'Peter', 'Mary', 'Jane'];
console.log(queue2.splice(2, 0, "Lenon", "Paul"));

/**********************************************
 * array.indexOf()
 * ==================================
 * When you would use it: To find the index of an element in an array
 ***********************************************/
// CODE HERE
let queue3 = ['John', 'Peter', 'Mary', 'Jane'];
console.log(queue3.indexOf('Jane'));


/**********************************************
 * array.sort()
 * ==================================
 * When you would use it: sort the values of an array, numerically or alphabetically
 ***********************************************/
// CODE HERE
let numbers = [3, 8, 7, 2];
let ascending = numbers.sort(function (a, b) {
  if (a < b) {
    return -1; // -1 if you want a to come before b
  } else if (a > b) {
    return 1; // 1 if you want a to come after b
  }
  return 0; // 0 if you want them to stay in place
});
console.log(ascending);

/**********************************************
 * array.concat()
 * ==================================
 * When you would use it: to join two or more arrays.
 ***********************************************/
// CODE HERE
let planets = ["earth", "mars"];
let moon = ["moon", "titan", "europa"];
let solarsystem = planets.moon(solarsystem);
console.log(solarsystem);

/**********************************************
 * array.unshift()
 * ==================================
 * When you would use it: adds elements to the front of an array.
 ***********************************************/
// CODE HERE
let queue4 = ['John', 'Peter', 'Mary', 'Jane'];
console.log(queue4.unshift('Betty'));
console.log(queue4);

/**********************************************
 * array.shift()
 * ==================================
 * When you would use it: removes one element from the front of an array.
 ***********************************************/
// CODE HERE
let queue5 = ['John', 'Peter', 'Mary', 'Jane'];
console.log(queue5.shift('John'));
console.log(queue5);