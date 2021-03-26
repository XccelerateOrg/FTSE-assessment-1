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
 * When you would use it: e.g to see if a set of data has a specific email
 ***********************************************/
let teachers = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
let sam = "sam@x.co";
console.log(teachers.includes(sam));

/**********************************************
 * array.slice()
 * ==================================
 * When you would use it: array.slice() extracts information from an array leaving the original intact. 
 * By doing so it creates a new array. essentially like copy and pasting only what you need
 ***********************************************/
// CODE HERE
let Lecturer = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
console.log(Lecturer.slice(1,3));
/**********************************************
 * array.splice()
 * ==================================
 * When you would use it: Editing and adding new items into a digital food menu. 
 ***********************************************/
// CODE HERE
let food = ["Pasta", "fish", "chips", "burger", "pizza"];
food.splice(1,3,"steak");
console.log(food);

/**********************************************
 * array.indexOf()
 * ==================================
 * When you would use it: searching for the given item and returns its position. 
 * If it cant find the object it will return -1.
 ***********************************************/
// CODE HERE
let dinner = ["Pasta", "fish", "chips", "burger", "pizza"];
console.log(dinner.indexOf("burger", 2));

/**********************************************
 * array.sort()
 * ==================================
 * When you would use it: best used with strings to sort array items alphabetically
 * in order of capital letters to lowercase.
 ***********************************************/
// CODE HERE
let lunch = ["pasta", "fish", "chips", "burger", "pizza"];
lunch.sort();
console.log(lunch);

/**********************************************
 * array.concat()
 * ==================================
 * When you would use it: To join an exising array together. You would use it for instances like merging data together or
 * create a new group with all the combines data.
 ***********************************************/
// CODE HERE
let sweets = ["gummy-bears", "haribo", "jaw-breakers"];
let chocolate = ["mars-bar", "twirl", "m&ms"];
let heaven = sweets.concat(chocolate);
console.log(heaven);

/**********************************************
 * array.unshift()
 * ==================================
 * When you would use it: To add newly important information to the front.
 ***********************************************/
// CODE HERE
const array1 = [4, 5];
array1.unshift(1, 2, 3);
console.log(array1);

/**********************************************
 * array.shift()
 * ==================================
 * When you would use it: to change an existing array by removing the first element in the array and returns it.
 ***********************************************/
// CODE HERE
const array2 = [0, 1, 2, 3, 4, 5];
array2.shift();
console.log(array2);