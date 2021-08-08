/**Variables */
const name = 'jair';
const last = 'jair';
let age = 15;
let isAdult = true;
console.log(typeof name)
console.log(typeof age)
console.log(typeof isAdult)
 isAdult = true;
console.log(typeof isAdult)


let name = 'jair';
let lastname= 'cast';
let savings = 45000000;
let debs = 100000;
console.log(`My name is ${name} ${lastname} and my actual balance is ${savings - debs}.`)

console.log(`Hole name : ${wholeName} and just my name ${wholeName.substr(wholeName.length-4)}`)

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function introduceYourself(name, lastName, nickName){
    let wholeName = name + " " + lastName;
    console.log(`My name is ${wholeName}, but I prefer you call me ${nickName}. `)
}
previous 
introduceYourself('Juan David', 'Castro Gallego', 'juandc');


switch (tipoDeSuscripcion) {
    case "Free":
           console.log("Solo puedes tomar los cursos gratis");
    break;
    case "Basic":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
    case "Expert":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
    case "ExpertPlus":
           console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    break;
    }

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis.");
}else{
    if(tipoDeSuscripcion == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes.");
    }else{
        if(tipoDeSuscripcion == "Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año.");
        }else{
            if(tipoDeSuscripcion == "ExpertPlus"){
                console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año.");
            }
        }
    }
}

if (tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
let i = 0; let text = "";

while (i < 10) {
    text += "The number is " + i;
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;
while(i >= 2){
    console.log("El valor de i es: " + i);
    i--;
}


let answer=0;

do{
    answer = Number(window.prompt("What's 2 + 2?"));
    if(answer != 4)
        alert("Oh I'm afraid! You made a little mistake!");

}while (answer != 4);
alert("Congratulations! You're awesome!")


const numbers=[1,2,3];
const cars = new Array("Saab", "Volvo", "BMW");

function printingFirstElement(value, index, array){
    console.log(value);
}
printingFirstElement(...numbers);
printingFirstElement(...cars);


const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + ",";
}
console.log(txt);

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(function(value){
    txt += value + ",";
});
console.log(txt);

const article = {
    name: "Bicycle",
    brand: "GW",
    price: 150000,
    color: "red"
}

printObjects(article);

function printObjects (object){
    for (var i in object){
        console.log(i + ":" + object[i])
    }
}

printObjects("hello");
printObjects(1);
const numbers = [45, 4, 9, 16, 25];

numbers.forEach(printer);

function printer(value){
    console.log(value);
};


//7 array how to find how many times is repeated a numberlet counter = 1;

 for(let i= 1; i < n; i++ ){
    if (triangle[i] == tempSide)
       counter++;
   else
       tempSide = triangle[i];
}