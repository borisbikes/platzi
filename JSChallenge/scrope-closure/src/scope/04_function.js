const fruits = () =>{
    var fruit = 'apple';
    console.log(fruit);
}

fruits();


/**
 * To avoid to overwriting a variable value, as a good practice it's better 
 * do not work with the reserved word 'VAR' to define variables,
 * from now we're working git CONST ans LET
 */
const anotherFunction = () =>{
    var x = 1;
    var x = 2;
    let y = 1;
    y = 2;
    console.log({x,y});
}

anotherFunction();