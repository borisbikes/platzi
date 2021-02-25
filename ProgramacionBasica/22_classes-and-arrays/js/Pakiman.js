class Pakiman{
    constructor(name, type, life, attack){
        this.name = name;
        this.type = type;
        this.life = life;
        this.attack = attack;
        //create an attribute from type Image and we set up the URL
        this.image = new Image();

        this.image.src = images[this.name];
    }
    speaking(){
        alert(this.name);
    }

    showing(){
        document.body.appendChild(this.image);
        
        document.write("<p>");
        //add a structure of DOM tree from <body> and add a branch to show a new element
        document.write("<strong>" + "name: " + "</strong>" + this.name + "<br>");
        document.write("<strong>" + "type: " + "</strong>" + this.type + "<br>");
        document.write("<strong>" + "life: " + "</strong>"  + this.life + "<br>");
        document.write("<strong>" + "attack: " + "</strong>"  + this.attack + "<br><hr/>");



        document.write("</strong>");
    }
}