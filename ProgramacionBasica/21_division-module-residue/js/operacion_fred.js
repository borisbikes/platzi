
/**
 * TODO set both scripts into the table col1 and col2
 */
var c = document.getElementById("col1");

var numbers = 100;
var isDivisible = false;

for(var n = 0; n <= numbers; n++){

    if(isModule(i, 3)){     //(i % 3 == 0)
        c.innerHTML  = "Fizz";
        isDivisible = true;

    }
    if(isModule(i, 5)){  //(i % 5 == 0)
        c.innerHTML  = "Buzz";
        isDivisible = true;

    }
    if(!isDivisible){ // if (i % 3 != 0 && i % 5 != 0 )
        c.innerHTML  = i;

    }
    c.innerHTML  ="<br>";
}

function isModule(num, divisor){
    return num % divisor == 0;
}