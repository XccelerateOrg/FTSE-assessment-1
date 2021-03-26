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
 * When you would use it: Returns a copy of an array into a new array
 ***********************************************/
// CODE HERE
let blogArticle = ["Jan Blog", "Feb Blog", "March Blog"]
let marchBlog = blogArticle.slice(2);

/**********************************************
 * array.splice()
 * ==================================
 * When you would use it: adding elements to specific list inside array
 ***********************************************/
// CODE HERE
let shopppingList = ["Apples", "Carrots", "Oranges"];
shopppingList.splice(1, 0, "Lemons")

/**********************************************
 * array.indexOf()
 * ==================================
 * When you would use it: find if item is in list
 ***********************************************/
// CODE HERE
let inventory = ["Gem", "Hat", "Bottle"]

function checkItem(item) {
    if (inventory.indexOf(item) === -1) {
        return "Doesnt Exist"
    } else {
        return "Inside Inventory"
    }
}
checkItem("Gem")
/**********************************************
 * array.sort()
 * ==================================
 * When you would use it: sorting names in alphabetical order
 ***********************************************/
// CODE HERE 
let names = ["Zion", "Jason", "Mary", "Ben"];
names.sort()

/**********************************************
 * array.concat()
 * ==================================
 * When you would use it: add two groups of people into one array
 ***********************************************/
// CODE HERE
let teamOne = ["John", "Susan", "Mary"];
let teamTwo = ["Kyle", "Lisa"]
let combine = teamOne.concat(teamTwo);

/**********************************************
 * array.unshift()
 * ==================================
 * When you would use it: when you have a queue of people and you want to add someone to the beginning of the queue
 ***********************************************/
// CODE HERE
let queue = ["John", "Susan", "Mary"]
queue.unshift("Justin");

/**********************************************
 * array.shift()
 * ==================================
 * When you would use it: As people go enter the shop, you want to remove the people in the beginnning of array first
 ***********************************************/
// CODE HERE
let queue = ["John", "Susan", "Mary"]
queue.shift();