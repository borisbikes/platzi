//context 2d from element html canvas
var sheet = document.getElementById("board");
var drawArea = sheet.getContext("2d");

//variables to catch the last position end line
var x;
var y;
var isDrawing = false;


//field to how many pixels is going to move the pencil
var space = 1;

var color = "yellow";
var e = document.getElementById("color-select");
var strUser = e.value;
console.log(strUser);

// LISTENERS
//Setting up a listener that it tells us when something happen

document.addEventListener('mousedown', drawingMouseDown);
document.addEventListener('mousemove', drawingMouseMove);
window.addEventListener('mouseup',drawingMouseUp); 

function drawingMouseDown(event){
    x = event.offsetX;
    y = event.offsetY;
    isDrawing = true;
}

function drawingMouseMove(event){
    if (isDrawing === true) {
      drawLine(drawArea, color, x, y, event.offsetX, event.offsetY, space);
      x = event.offsetX;
      y = event.offsetY;
    }
}
  
function  drawingMouseUp(event){
    if (isDrawing === true) {
      drawLine(drawArea,color, x, y, event.offsetX, event.offsetY, space);
      x = 0;
      y = 0;
      isDrawing = false;
    }
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



