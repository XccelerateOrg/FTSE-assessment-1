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
 * returns the selected elements in an array, as a new array object. and selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
 ***********************************************/
// CODE HERE
let Resident_teachers = ["teacherA","teacherB","sam","bibek","lesley"];
let false_Resident_teachers = Resident_teachers.slice(0,2);
let real_Resident_teachers = Resident_teachers.slice(2);
console.log(false_Resident_teachers);
console.log(real_Resident_teachers);

/**********************************************
 * array.splice()
 * ==================================
 * When you would use it:
 * adds/removes items to/from an array, and returns the removed item(s).
 ***********************************************/
// CODE HERE
let Resident_teachers_a = ["sam","bibek","lesley"];
let lady;
let man;
Resident_teachers.splice(2,0,"Rachel");
console.log(Resident_teachers_a);

man = Resident_teachers_a.splice(0,2);
console.log(man);
lady = Resident_teachers_a
console.log(lady);



/**********************************************
 * array.indexOf()
 * ==================================
 * When you would use it:
 * searches the array for the specified item, and returns its position.
 ***********************************************/
// CODE HERE
const Resident_teachers_b = ["sam","bibek","lesley"];

console.log(Resident_teachers_b.indexOf('sam'));
console.log(Resident_teachers_b.indexOf('bibek'));
console.log(Resident_teachers_b.indexOf('a'));


/**********************************************
 * array.sort()
 * ==================================
 * When you would use it:
 * reverses the elements in an array.
 ***********************************************/
// CODE HERE
const Resident_teachers_c = ["sam","bibek","lesley"];
const array1 = [1,1990,2, 22];

console.log(Resident_teachers_c.sort());
console.log(array1.sort());

/**********************************************
 * array.concat()
 * ==================================
 * When you would use it:
 * is used to join two or more arrays.
 ***********************************************/
// CODE HERE
const Resident_teachers_d = ["sam","bibek","lesley"];
const B_teachers = ["Rachel"];
const All_teachers = Resident_teachers_d.concat(B_teachers);

console.log(All_teachers)


/**********************************************
 * array.unshift()
 * ==================================
 * When you would use it:
 * adds new items to the beginning of an array, and returns the new length.
 ***********************************************/
// CODE HERE
const Resident_teachers_e = ["sam","bibek","lesley"];

console.log(Resident_teachers_e.unshift("Rachel"));  // result of the call is 4, which is the new array length
console.log(Resident_teachers_e)



/**********************************************
 * array.shift()
 * ==================================
 * When you would use it:
 * removes the first item of an array.
 ***********************************************/
// CODE HERE
let Resident_teachers_f = ["teacherA","teacherB","sam","bibek","lesley"];
let True_Resident_teachers_f ;
console.log(Resident_teachers_f);
Resident_teachers_f.shift();
Resident_teachers_f.shift();
True_Resident_teachers_f = Resident_teachers_f;
console.log(True_Resident_teachers_f);


