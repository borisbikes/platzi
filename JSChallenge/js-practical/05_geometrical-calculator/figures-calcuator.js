/**  ⬛ 🔺 🟣*/

// Perimeter and Area Squared
function perimeterSquared(side){
    return side * 4
}

function areaSquared(side){
    return side * side;    
}


// Perimeter and Area Triangle

function perimeterTriangle(sideTriangle1, sideTriangle2, baseTriangle){
    return sideTriangle1 + sideTriangle2 + baseTriangle;
}

function areaTriangle(baseTriangle, heightTriangle){
    return (baseTriangle * heightTriangle) / 2;
}


// Perimeter and Area Circle
function diameterCircle(radius){
    return  radius * 2;
}

function perimeterCircle(radius){
    const diameter = diameterCircle(radius);
    return diameter * Math.PI;
}

function areaCircle(radius){
    return (radius * radius) * Math.PI;
}


//interacting with HTML

console.group("html");

// squared html
function calculatePerimeterSquared(){
    const input = document.getElementById("inputSquared");
    const value = input.value;
    const perimeter = perimeterSquared(value);
    alert(perimeter);
}

function calculateAreaSquared(){
    const input = document.getElementById("inputSquared");
    const value = input.value;
    const area = areaSquared(value);
    alert(area);
}

// triangle html
function calculatePerimeterTriangle(){
    //const input = document.getElementById("inputSquared");
    const value1 = document.getElementById("inputTriangle1").value;
    const value2 = document.getElementById("inputTriangle2").value;
    const value3 = document.getElementById("inputTriangle3").value;
    const perimeter = perimeterTriangle(value1, value2, value3);
    alert(perimeter);
}

function calculateAreaTriangle(){
    const value3 = document.getElementById("inputTriangle3").value;
    const height = document.getElementById("inputTriangleHeight").value;
    const area = areaTriangle(value3, height);
    alert(area);
}

// circle html
function calculatePerimeterCircle(){
    const input = document.getElementById("inputCircle");
    const value = input.value;
    const perimeter = perimeterCircle(value);
    alert(perimeter);
}

function calculateAreaCircle(){
    const input = document.getElementById("inputCircle");
    const value = input.value;
    const area = areaCircle(value);
    alert(area);
}


console.groupEnd();