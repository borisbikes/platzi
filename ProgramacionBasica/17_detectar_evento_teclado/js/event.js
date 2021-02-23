//Setting up a listener that it tells us when something happen
document.addEventListener("keydown", drawingKeyboard);

//Creating a Object through JSON (javaScript Object Notation) translate keysCode values
var keysBoard = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

//function that draws lines
function drawLine(canvas, color, xInitial, yInitial, xFinal, yFinal, sizeLine){
    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.lineWidth = sizeLine;
    canvas.moveTo(xInitial, yInitial); 
    canvas.lineTo(xFinal, yFinal); 
    canvas.stroke(); 
    canvas.closePath(); 
}

//context 2d from element html canvas
var sheet = document.getElementById("keyboard");
var drawArea = sheet.getContext("2d");

//variables to catch the last position end line
var x = 150;
var y = 150;

//field to how many pixels is going to move the pencil
var space = 5;

// start button or beginning to draw
drawLine(drawArea, "red", 149, 149, 151, 151, 3);

function drawingKeyboard( event ){
    //that prints which value we're working 
    //console.log( event.keyCode + " - " + event.key);
    //color
    var colorPen = "green";

    switch(event.keyCode){
        case keysBoard.LEFT: 
            drawLine(drawArea, colorPen, x, y, x - space, y);
            x = x - space;
        break;

        case keysBoard.RIGHT: 
            drawLine(drawArea, colorPen, x, y, x + space, y);
            x = x + space;
        break;

        case keysBoard.UP: 
            drawLine(drawArea, colorPen, x, y, x, y - space);
            y = y-space;
        break;

        case keysBoard.DOWN: 
            drawLine(drawArea, colorPen, x, y, x, y + space);
            y = y + space;
        break;
        default: console.log("you've already pressed down any other key")
    }


}


