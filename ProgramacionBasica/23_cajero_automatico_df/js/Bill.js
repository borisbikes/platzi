/**
 * This class represent the object Bill from the real world
 *
 */

 class Bill{
    constructor( denomination, quantity){
         this.denomination = denomination;
         this.quantity = quantity;
         //create an attribute from type Image and we set up the URL
        this.image = new Image();
        this.image.src = images[this.denomination];
    }

    showing(){

         //appendChild allow us to add a new branch from the DOM tree in the <body> tag
         document.body.appendChild(this.image);
        
         
    }
 }

 //define an associative array 
var images = [];
images["10"] = "./media/10.jpg";
images["20"] = "./media/20.jpg";
images["50"] = "./media/50.jpg";

