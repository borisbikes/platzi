//define an associative array 
var images = [];
images["Cauchin"] = "./media/vaca.png";
images["Pokacho"] = "./media/pollo.png";
images["Tocinauro"] = "./media/cerdo.png";

// define a class
//it comes from another js file
var pokeBall = [];
pokeBall.push( new Pakiman("Cauchin", "earth", 120, 40));//cow
pokeBall.push( new Pakiman("Pokacho", "earth", 80, 50));//chicken
pokeBall.push(  new Pakiman("Tocinauro", "earth", 80, 50));//chicken

//printing on console three object at the same time
//console.log(cauchin, pokacho, tocinauro);

//showing object image, but it'll turns to much duplicate code "BOILERPLATE"
/* cauchin.showing();
pokacho.showing();
tocinauro.showing(); */

// for each but looking the object
for(i of pokeBall){
    i.showing();
}


// for each but looking the index
for(i in pokeBall){
    console.log(i);
}

