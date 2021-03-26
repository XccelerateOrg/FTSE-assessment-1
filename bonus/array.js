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
 * When you would use it: to select item(s) in the array and return them in a variable, for example, choosing my favourite fruits in the below array
 ***********************************************/
// CODE HERE
let fruits = ["grapes", "mango", "strawberry", "cherries", "figs", "watermelon"];
let favourite = fruits.slice(0,2);
console.log(favourite);

/**********************************************
 * array.splice()
 * ==================================
 * When you would use it: to insert item(s) into the middle of the array, with an option to remove existing item(s) in it, for example, add more fruits I like to the above array and remove the ones I dislike
 ***********************************************/
// CODE HERE
let newFruit = fruits.splice(3, 2, "bananas", "apples")
console.log(newFruit); // we can get the items removed by saving the .splice action to a variable hence we get [ 'cherries', 'figs' ] removed
console.log(fruits); // now only the fruits I like remain in the fruits array [ 'grapes', 'mango', 'strawberry', 'bananas', 'apples', 'watermelon' ]

/**********************************************
 * array.indexOf()
 * ==================================
 * When you would use it: the find the index of a certain item in the array, for example, I want to know the index of mango in my fruit array
 ***********************************************/
// CODE HERE
console.log(fruits.indexOf('mango'))

/**********************************************
 * array.sort()
 * ==================================
 * When you would use it: to sort an array by UTF-16 code unite of items (converted to strings) in the array, alternatively, we can write our own compare function to specify how to sort the items
 ***********************************************/
// CODE HERE
function compareNumbers(a, b) { // this numbers comparasion function tells the sort function how to define which number comes first
    return a - b;
}
let numbers = [1, 100, 1000000, 22, 35, 4444] // For example, I want to present these numbers nicely in ascending order when I print them
let sorted = numbers.sort(compareNumbers); // Without using the compareNumbers param, the sorting would not make sense as the default compare method does not compare the integer value, but the UTF-16 value of the converted strings
console.log(sorted);

/**********************************************
 * array.concat()
 * ==================================
 * When you would use it: to join strings, for example, I have the first and last name of a person and I want to create a full name variable
 ***********************************************/
// CODE HERE
let firstName = "Justin"
let lastName = "Choi"
let fullName = firstName.concat(" ").concat(lastName)
console.log(fullName);

/**********************************************
 * array.unshift()
 * ==================================
 * When you would use it: to add item(s) to the beginning of an array, in this case, the order of the array probably matters
 ***********************************************/
// CODE HERE
sorted.unshift(-100, -10, 0)
console.log(sorted); // Remember my sorted array above? Since I want to add some negative numbers and zero to it but I don't want to mess up the ascending order, I used unshift

/**********************************************
 * array.shift()
 * ==================================
 * When you would use it: to remove the first item of the array
 ***********************************************/
// CODE HERE
let removed = sorted.shift();
console.log(removed); // .shift() returns the removed item, which is -100 in the case
console.log(sorted); // The sorted array now has -100 removed from it

