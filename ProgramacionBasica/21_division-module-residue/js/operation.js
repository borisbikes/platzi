//alert("fizz");
var limit = 100;

for (var i = 1; i <= limit; i++){
    var message="";
    if(i % 3 == 0) message = "fizz"
    if(i % 5 == 0) message = message + "buzz"
    document.write(i + " " + message + 
    "<br>");
}
