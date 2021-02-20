/*let's go, it's time to create a function
 * Fredy's advice is place every function at the beginning of document , because those fragment 
 * of code javaScript always is going to upload in the RAM memory 
 * 
 * Another advantage of functions is, if there are some bug I'll change it in just one place of code
 */

function drawLine(lienzo, color, xInitial, yInitial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInitial, yInitial); 
    lienzo.lineTo(xFinal, yFinal); 
    lienzo.stroke(); 
    lienzo.closePath(); 
}

//alert("hello");
var m = document.getElementById("marcoFc");
//catch the length from canvas 300
var widthGraph = m.height; 
var lienzo = m.getContext("2d");
var lineLimit = 30;
var line = 0;

/**
 * Elements DOM to drive events
 */

var frmLines = document.getElementById("txt-lines");
var frmSendBtn = document.getElementById("btn-send");

/** 
 * LISTENERS
 * setting up a listener to know when the button is click it as sensor works, 
 * say something when something happens
*/
frmSendBtn.addEventListener("click", drawingByEvents); // we don't use "()" in the function because 
                                                    // we don't want to run, we just set the name
                                                    // when something happen search the function 
                                                    // that this name and run it.

/**
 * This function will paint the graphs when the user send the number of lines through the event "click"
 */                                                    
function drawingByEvents(){
    
    lineLimit = parseInt(frmLines.value);
    var spaceGraph = widthGraph/frmLines.value;
    
    line = 0;    
    while(line <= lineLimit){
        drawLine(lienzo, "green", widthGraph, line*spaceGraph, ((line+1)*spaceGraph)+widthGraph, widthGraph);
    //    console.log("Line: " + line)
        line++;
    } 

    for(line=0; line <= lineLimit; line++){
        drawLine(lienzo, "green", line*spaceGraph, widthGraph, widthGraph, widthGraph -(line*spaceGraph));
        
    }


}





//drawing a sheet

line = 0.5;
do{
    drawLine(lienzo, "cyan", 0, line*10+0.2, 600, line*10+0.2);
    line++;
}while(line <= lineLimit);

drawLine(lienzo, "white", 300, 1, 300, 300);