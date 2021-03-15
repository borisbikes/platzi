// require function run just in the server side to bring express libraries to our project as an import in java :S
var express = require("express");

//create a new instance of this application - we are giving all super powers from the express into the app variable
var app = express();

/* 
 * we are sending a petition through http protocol using the get method
 * '/' represent home of our application and where we are shooting a function whe that home is being called
 * similar add an addEventListener(event, function)
 * where event is the url and function the function name that it will be called
 * */
 
 app.get( '/', start);
 app.get( '/courses', courses);

function start(req, resp){
    resp.send("This is <strong> my app home </strong>");
}

function courses(req, resp){
    resp.send("These are <strong> my app courses </strong>");
}

//running server through 8989 port listener
app.listen(8989);