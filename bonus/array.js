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
 * When you would use it: to find out the next three upcoming learning topics after learning  three topics
 ***********************************************/
// CODE HERE
let topics = ["HTML","CSS","Javascript","Bootstrap","JS","jQuery","Node"];
console.log(topics.slice(3,6));

/**********************************************
 * array.splice()
 * ==================================
 * When you would use it: replace the third interviewee with another person 
 ***********************************************/
// CODE HERE
let interviewee = [ "Lesley","Bibek","Sam","David","Karl"];
let updatedinterviewee= interviewee.splice(2,1,"Justin");


/**********************************************
 * array.indexOf() 
 * ==================================
 * When you would use it: to find out how many people waiting in front of me
 ***********************************************/
// CODE HERE
let waitlist = ["Ray","Pon","Viola","Caspar"];
let noOfPeopleBeforeMe = waitlist.indexOf("Viola");

console.log(noOfPeopleBeforeMe);
/**********************************************
 * array.sort()
 * ==================================
 * When you would use it: arrange students in alphabetical order
 ***********************************************/
// CODE HERE
let student = ["Mary","John","Anna","Kerry"] ;
console.log(student.sort());
/**********************************************
 * array.concat()
 * ==================================
 * When you would use it: combine January cohort students with March  cohort students
 ***********************************************/
// CODE HERE
let janStudents = ["A","B","C"];
let marchStudents = ["Justin","Justin","Justin"];

let janMarStudents= janStudents.concat(marchStudents);
console.log(janMarStudents);

/**********************************************
 * array.unshift()
 * ==================================
 * When you would use it: add in the preparation work to the beginning of the course
 ***********************************************/
// CODE HERE
let course = ["week1","week2","week3","week4"];
course.unshift("week0");
console.log(course);



/**********************************************
 * array.shift()
 * ==================================
 * When you would use it:remove the preparation week from the course structure
 ***********************************************/
// CODE HERE

course.shift();
console.log(course);