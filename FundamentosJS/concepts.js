
/**
 * JS Fundamentals 
 * Repo Teach https://github.com/platzi/FundamentosJSCurso
 * 
 * 1 Variables
 * When we just define a var name; in fact it will return an undefined value, cause this values doesn't have a value yet.
 * For good practices JS usually use strings with single '', also community 
 * JS is a language weakly typed, that means we don't defined any data type and also in any variable can change depends on
 * the values in taken in that variable
 * 
 */
const bug = String.fromCodePoint(0x1F41E);
console.log('%c🚀On this way you can write a message from js into the console browser!', 'color: yellow',`${bug}`);

var name = 'jair', lastName = 'cast', age = 28;
console.log('Hello ' + name + ' ' + lastName + ", I'm " +age);

age = 'twenty-eight';
console.log("Could you repeat your age, please?, I'm " + age);

/**
 * 
 * 2 String variables
 * Checking its different functions
 *  - .toUpperCase() 
 *  - .toLowerCase() 
 *  - .charAt(1) -> get the letter of this string index
 *  - .length -> get the characters number of that string
 *  - `${}` -> allows to concatenate text in a legible way
 *  - .substr(1), .substr(1,5) -> allows to cut a specific string part
 * 
 */
 console.log('Nice to meet you Mr. ' + lastName.toUpperCase() + ', '+ name.toLowerCase() +'. Please call me ' + name.charAt(0).toUpperCase() + '' + lastName.charAt(0).toUpperCase());
 console.log('My name has ' + name.length, 'and my lastmane ' + lastName.length + ' letters')


 // interpolation text how to concatenate two variables doing use of backTicks(``), it helps to set variables with a legible syntax ${} adding some text also
 var wholeName = `${lastName.toUpperCase()} ~customer text>> ${name}`;
 console.log(`Hole name : ${wholeName} and just my name ${wholeName.substr(wholeName.length-4)}`)