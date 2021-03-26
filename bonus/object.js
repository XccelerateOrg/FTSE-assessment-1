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
 * When you would use it: to find out the type of cuisine I can have for lunch in Tsim Sha Tsui
 ***********************************************/
// CODE HERE
let tstFood = {
  japanese:[
    "rest A",
    "rest B",
    "rest C",
  ],
  thai:[
    "rest D",
    "rest E",
    "rest F",
  ],
}

console.log(Object.keys(tstFood));

/**********************************************
 * object.values()
 * ==================================
 * When you would use it: to find out the options of restaurants I can have for lunch in Tsim Sha Tsui
 ***********************************************/
// CODE HERE
console.log(Object.values(tstFood));
