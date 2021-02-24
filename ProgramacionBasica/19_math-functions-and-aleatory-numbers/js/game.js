/**
 *  MR. PIG CHALLENGE - how to move a brave pig with key arrows 
 */
// 1. Listener from keyboard
document.addEventListener("keydown", movePig);

 // 2. object that tells us the keycode of the key that has been pressed
var keysBoard = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var xPig = 420, yPig = 420;

function movePig( event ){
    var step = 10;
    switch(event.keyCode){
        case keysBoard.LEFT: 
            xPig = xPig - step;
            drawingEverything(xPig, yPig);
        break;

        case keysBoard.RIGHT: 
            xPig = xPig + step;
            drawingEverything(xPig, yPig);
        break;

        case keysBoard.UP: 
            yPig = yPig - step;
            drawingEverything(xPig, yPig);
        break;

        case keysBoard.DOWN: 
            yPig = yPig + step;
            drawingEverything(xPig, yPig);
        break;
        default: console.log("you've already pressed down any other key")
    }
}






//*****************************************************************end PIG CHALLENGE


// calling the element from html and setting up drawing type 2d 
var canvas = document.getElementById("board").getContext("2d");

//creating a background Image and setting up its local image
var backgroundImage = {
    url: "./media/tile.webp",
    isLoaded: false
}
backgroundImage.image = new Image();
backgroundImage.image.src = backgroundImage.url;
//set a listener to tell us when our background image has been loaded from the path
backgroundImage.image.addEventListener("load", loadingBackground);

//creating a cow Image and setting up its local image
var cow ={
    url: "./media/vaca.png",
    isLoaded: false
}
cow.image = new Image();
cow.image.src= cow.url;
cow.image.addEventListener("load", loadingCow);


//creating a pig Image and setting up its local image
var pig ={
    url: "./media/cerdo.png",
    isLoaded: false
}
pig.image = new Image();
pig.image.src= pig.url;
pig.image.addEventListener("load", loadingPig);

//creating a chicken Image and setting up its local image
var chicken ={
    url: "./media/pollo.png",
    isLoaded: false
}
chicken.image = new Image();
chicken.image.src= chicken.url;
cow.image.addEventListener("load", loadingChicken);

//give us an aleatory quantity for objects in our canvas
var objectNumber = randomRank(2, 6);
console.log("objects number: " + objectNumber);

/**
 * loadingBackground only will be shot when the image is by now ready 
 * though this action event listener that was setting up before
 */
function loadingBackground(){
    backgroundImage.isLoaded = true;
    drawingEverything();
}

function loadingCow(){
    cow.isLoaded = true;
    drawingEverything();
}

function loadingChicken(){
    chicken.isLoaded = true;
    drawingEverything();
}

function loadingPig(){
    pig.isLoaded = true;
    drawingEverything();
}




/**
 * This function is called for every single object is already loading and 
 * it will drawing again when a new image is by now ready
 */
function drawingEverything(){
    var x, y;
    
    if(backgroundImage.isLoaded){
        canvas.drawImage(backgroundImage.image, 0, 0);
    }
    
    if(cow.isLoaded){
        for(var o = 0; o < objectNumber ; o ++){
            x =  randomRank( 0, canvas.canvas.width - cow.image.width); // 500-80
            y =  randomRank( 0, canvas.canvas.height - cow.image.height); // 500-80
            canvas.drawImage(cow.image, x, y);
        }
        
    }

    if(chicken.isLoaded){
        for(var o = 0; o < objectNumber ; o ++){
            x =  randomRank( 0, canvas.canvas.width - chicken.image.width); // 500-80
            y =  randomRank( 0, canvas.canvas.height - chicken.image.height); // 500-80
            canvas.drawImage(chicken.image, x, y);
        }
        
    }
    if(pig.isLoaded){
        //number of pixels walked
        canvas.drawImage(pig.image, xPig, yPig);        
    }

}

function randomRank(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}