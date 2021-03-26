/**********************************************
 * Object Methods
 * ==================================
 * Provide your own example for each object method below,
 * explaining when you would use each one (it would be even better if you could give a real life example!)
 *
 * Use the documentation as provided here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 *
 * To run the file, go to your terminal, cd into this folder, and type in node object.js
 *
 ***********************************************/

/**********************************************
 * object.entries()
 * ==================================
 * When you would use it: to see if the object includes a specific number
 ***********************************************/
let tst = {
  malls: [
    "Harbour City",
    "K11",
    "Sogo",
    "Silvercord",
    "The ONE",
    "1881 Heritage",
  ],
  museums: [
    "Hong Kong Space Museum",
    "Hong Kong Museum of Art",
    "Hong Kong Museum of History",
  ],
};

let allEntries = Object.entries(tst);
console.log(allEntries);

/**********************************************
 * object.keys()
 * ==================================
 * When you would use it: to see all of the keys of an object, for example, we have not used the object 'tst' before and want to see what keys it stores, we can output all keys to an array
 ***********************************************/
// CODE HERE
let keys = Object.keys(tst);
console.log(keys); // [ 'malls', 'museums' ]

/**********************************************
 * object.values()
 * ==================================
 * When you would use it: to see all the values stored in an object, in this example, all the major landmarks in TST
 ***********************************************/
// CODE HERE
let values = Object.values(tst);
console.log(values);
