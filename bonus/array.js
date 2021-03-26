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
 * When you would use it: to extract a section of an array
 ***********************************************/
 let teacher = ["sam@x.co", "bibek@x.co", "lesley@x.co"];
 console.log(teachers.slice(1,2));
/**********************************************
 * array.splice()
 * ==================================
 * When you would use it: TO changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
 ***********************************************/
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb')
console.log(months)

/**********************************************
 * array.indexOf()
 * ==================================
 * When you would use it: To returns the index at which a given element can be found in the array
 ***********************************************/
let beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(beasts.indexOf("ant"))
/**********************************************
 * array.sort()
 * ==================================
 * When you would use it: sorts the elements of an array in place and returns the sorted array.
 ***********************************************/
 let numbers = ["b", "a", "g", "z", "i"]
 console.log(numbers.sort())

/**********************************************
 * array.concat()
 * ==================================
 * When you would use it:To merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

 ***********************************************/
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let newArray = array1.concat(array2)
console.log(newArray)

/**********************************************
 * array.unshift()
 * ==================================
 * When you would use it: To adds one or more elements to the beginning of an array and returns the new length of the array.
 ***********************************************/
 let food = ['apple', 'pizza', 'noodles'];
food.unshift("rice")
console.log(food)
/**********************************************
 * array.shift()
 * ==================================
 * When you would use it: To removes the first element from an array and returns that removed element
 ***********************************************/
let car = ["benz", "BMW", "Volvo"]
car.shift(0)
console.log(car)