//alert("hello");
var m = document.getElementById("marco");
var m2 = document.getElementById("marcoF");
var m3 = document.getElementById("marcoFc");
var lienzo = m.getContext("2d");
var lienzo2 = m2.getContext("2d");
var lienzo3 = m3.getContext("2d");
var lineLimit = 30;
var line = 0;

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(30, 100); //put your brush in that start position
lienzo.lineTo(130, 200); // imagine where will be the path for your line until that point.
lienzo.stroke(); //draw the line where you've imagined it.
lienzo.closePath(); // finally rise your brush to check how the line looks.

/* When I feel that I'm writing 2 or more times the same code "BoilerPlate" or just variables' values
 * That's a good signal to create a FUNCTION
 */

//I think that I've already wrote this code!
lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(30, 200); 
lienzo.lineTo(130, 100); 
lienzo.stroke(); 
lienzo.closePath(); 


/*let's go, it's time to create a function
 * Fredy's advice is place every function at the beginning of document , because those fragment of code
 * always are going to upload in the browser memory
 * Another advantage of functions is, if there are some bug I'll change it in just one place of code
 */

function drawLine(lienzo, color, xInitial, yInitial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInitial, yInitial); 
    lienzo.lineTo(xFinal, yFinal); 
    lineWidth = 0.5;
    lienzo.stroke(); 
    lienzo.closePath(); 

}

drawLine(lienzo2, "yellow", 100, 100, 300, 300);
drawLine(lienzo2, "pink", 50, 200, 300, 50);

drawLine(lienzo3, "white", 300, 1, 300, 300);
//WHILE and FOR Cycles 
// We must set a limit to stop aur algorithms to avoid an infinite cycle

/* drawLine(lienzo3, "green", 0, 0, 10, 300);
drawLine(lienzo3, "green", 0, 10, 20, 300); */


//drawLine(lienzo3, "white", 300, 1, 300, 300);
//drawLine(lienzo3, "white", 300, 1, 300, 300);

while(line <= lineLimit){
    drawLine(lienzo3, "green", 300, line*10, ((line+1)*10)+300, 300);
    console.log("Line: " + line)
    line++;
}

//drawLine(lienzo3, "white", 300, 1, 300, 300);

//( 0, 300 ) (300, 290 )
//( 10, 300 ) (300, 280 )
for(line=0; line <= lineLimit; line++){
    drawLine(lienzo3, "green", line*10, 300, 300, 300 -(line*10));
    
}


while(line <= lineLimit){
    drawLine(lienzo3, "green", 300, line*10, ((line+1)*10)+300, 300);
    console.log("Line: " + line)
    line++;
}

//DO - WHILE Cycle, but the condition goes at the end
// the thing is the instruction is going to run at least one time
line = 0.5;
//( 0, 0) ( 600, 0)
//( 0, 10) ( 600, 10)
//( 0, ) ( ,)
do{
    drawLine(lienzo3, "cyan", 0, line*10+0.2, 600, line*10+0.2);
    line++;
}while(line <= lineLimit);
