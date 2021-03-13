/**
 * Defining an ASSOCIATIVE array
 * that means instead to set as number in a position array[0], array [1] , array position sub 0  or sub 1
 * the array allow us to change that position by a name array[name1], array[name2] and 
 * in that way I'll be able to get the array value thought  that name instead a position sub 0
 * array sub name1. That structure's name usually calls DataDictionary
 */

//define an associative array 
var images = [];
images["Cauchin"] = "./media/vaca.png";
images["Pokacho"] = "./media/pollo.png";
images["Tocinauro"] = "./media/cerdo.png";

/**
 * The above structure it could be also written as an Object (JSON)
 * var imagenes = {
 *     Cauchin: "vaca.png",
 *     Pokacho: "pollo.png",
 *     Tocinauro:  "cerdo.png"
 * }
 */



/**
 * The definition Class we can find in Pakiman.js file
*/ 

//defining a new empty array 
var pokeBall = [];

// setting new vales through the array.push() method that allows to set a value in the last position 
// to avoid to set values as array[0] , array[1] and so on..

pokeBall.push( new Pakiman("Cauchin", "earth", 100, 30));//cow
pokeBall.push( new Pakiman("Pokacho", "earth", 80, 50));//chicken
pokeBall.push( new Pakiman("Tocinauro", "earth", 140, 40));//pig

// printing the new instance from Pakiman Class 
// on console three object at the same time

console.log(pokeBall["Cauchin"], pokeBall["Pokacho"], pokeBall["Tocinauro"]);


/**
 *  showing object image, but it'll turns to much duplicate code "BOILERPLATE"
 *  What about if I would have to print 20 Pakimans?
 *  cauchin.showing();
 *  pokacho.showing();
 *  tocinauro.showing(); 
 *  in tah case we'll use for each sentence
 */

// for each allow us to iterate each elements inside of this array
 // for each but looking the array index we use 'in'
for(var i in pokeBall){
    console.log(i);
}
 
//    'of'  show us directly the object instance useful with associative arrays that they don't have indexes
for(var i of pokeBall){
    i.showing();
}



//it will print each attribute from my first object saved in the pokeball array
for(var i in pokeBall[0]){
    console.log(i);
}
