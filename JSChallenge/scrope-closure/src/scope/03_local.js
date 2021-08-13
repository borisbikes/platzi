const sayHello = () => {
    const hello = "Hello World!";
    console.log(hello);
}

sayHello();

// If we try to call the name of the previous local variable, throw the error message
//              vvvv     hello is not defined (in a global way... JUST LOCAL) 
// console.log(hello);

//Example #3
var scope = "I'm a global variable";

const functionScope = () => {
    var scope = "I'm just a local variable"; // it calls lexical scope
    const func = () => {
        return scope;
    }
    console.log(func());
}

functionScope();

console.log(scope);
