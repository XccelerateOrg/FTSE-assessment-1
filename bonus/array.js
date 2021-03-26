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
 * When you would use it:
 ***********************************************/
 let teachers2 = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
 console.log(teachers2.slice(1, 2));

/**********************************************
 * array.splice()
 * ==================================
 * When you would use it:
 ***********************************************/
 let teachers3 = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
 teachers3.splice(1, 0, "D", "E");
 console.log(teachers3);

/**********************************************
 * array.indexOf()
 * ==================================
 * When you would use it:
 ***********************************************/
 let teachers4 = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
 console.log(teachers4.indexOf("lesley@x.co"));

/**********************************************
 * array.sort()
 * ==================================
 * When you would use it:
 ***********************************************/
 let teachers5 = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
 console.log(teachers4.sort());

/**********************************************
 * array.concat()
 * ==================================
 * When you would use it:
 ***********************************************/
 let teachers6 = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
 let teachers6a = ["D", "E"];
 let result = teachers6.concat(teachers6a);
 console.log(result);

/**********************************************
 * array.unshift()
 * ==================================
 * When you would use it:
 ***********************************************/
 let teachers7 = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
 teachers7.unshift("A", "B");
 console.log(teachers7);

/**********************************************
 * array.shift()
 * ==================================
 * When you would use it:
 ***********************************************/
 let teachers8 = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
 teachers8.shift();
 console.log(teachers8);
