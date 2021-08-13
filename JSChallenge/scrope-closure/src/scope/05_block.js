/**
 * In this function we can show haw even though to define 3 variables fruit inside de IF block
 * we can access them in the outside scope of this function
 */

const fruits = () => {
    if(true){
        var fruit1 = 'apple';
        var fruit2 = 'banana';
        var fruit3 = 'kiwi';

    }

    console.log({
        fruit1, fruit2, fruit3
    });
}

fruits();

/*
* In this function we can show haw depend of the declaration we'll be able to 
* access them just in this code block or in all this scope function
*/

const fruits = () => {
   if(true){
       var fruit1 = 'apple';
       let fruit2 = 'banana'; // variables with just block scope
       const fruit3 = 'kiwi'; // variables with just block scope
       console.log({
        fruit1, fruit2, fruit3
    });
   }

   console.log({
       fruit1, // just this scope was declare with a function scope
   });
}

fruits();