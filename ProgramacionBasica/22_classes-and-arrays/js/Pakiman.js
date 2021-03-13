/**
 * This class represent a frame from a Pakiman to create as many 
 * as we want
 * 
 */

class Pakiman{
    /* For defining attributes to our Class we must to define and sent the values through the construct method 
     * putting ahead of this.<attribute-name> to refers at the attributes at time to create a new instance to setting 
     * their new values.
     */
    
    constructor(name, type, life, attack){
        
        this.name = name;
        this.type = type;
        this.life = life;
        this.attack = attack;
        //create an attribute from type Image and we set up the URL
        this.image = new Image();
        //we are setting the image at attribute image from 'Image' type thought this.image.src() method
        // for that reason we are finding the images' array position sub Pakiman's name instead [0]
        this.image.src = images[this.name];
    }

    //Inside a class it's not necessary to put the word function to define a new 'function'

    /**
     * This method enable to say the name of this Pakiman
     */
    speaking(){
        alert(this.name);
    }

    /**
     * This function print each Pokiman's values until its image attribute
     */
    showing(){

        //appendChild allow us to add a new branch from the DOM tree in the <body> tag
        document.body.appendChild(this.image);
        
        document.write("<p>");
        document.write("<strong>" + "name: " + "</strong>" + this.name + "<br>");
        document.write("<strong>" + "type: " + "</strong>" + this.type + "<br>");
        document.write("<strong>" + "life: " + "</strong>"  + this.life + "<br>");
        document.write("<strong>" + "attack: " + "</strong>"  + this.attack + "<br><hr/>");

        document.write("</p>");
    }
}