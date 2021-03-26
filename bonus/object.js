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
 * When you would use it: list out the keys in an array
 ***********************************************/
let object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1))


/**********************************************
 * object.values()
 * ==================================
 * When you would use it: list out the values in an array
 ***********************************************/
 let object2 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1))
