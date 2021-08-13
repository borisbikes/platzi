
// Defining Variables with Global Scope 
var hello = "Hello";
var hello = "Hello + ";
let world = "Hello World";
 // let world = "";  //-> catch an error 'world' has already been declared

const helloWorld = "Hello World!";


// Defining an arrow function
const anotherFunction = () => {

    //Inside the function we can access to scope global variables
    console.log({
       hello,
       world,
       helloWorld,
    });
}

anotherFunction();

/**
 * Defining an arrow function that has a Global variable inside, after executed 
 * this function we can call this variable in the global scope or outside the 
 * function. But, this is a bad practice ='()
 * 
 */
const helloWorld = () => {
    globalVar = "I'm a global variable;"
}

helloWorld();
console.log({
    globalVar,
});

const anotherFunction = () => {
    var localVar = globalVar = "I'm now another global var";
}

anotherFunction();
console.log({
    globalVar,
});