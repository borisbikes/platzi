/**  ⬛ 🔺 🟣*/

// Perimeter and Area Squared
console.group("Squared")

function perimeterSquared(side){
    return side * 4
}

function areaSquared(side){
    return side * side;    
}

console.groupEnd();

// Perimeter and Area Triangle
console.group("Triangle");

function perimeterTriangle(sideTriangle1, sideTriangle2, baseTriangle){
    return sideTriangle1 + sideTriangle2 + baseTriangle;
}

function areaTriangle(baseTriangle, heightTriangle){
    return (baseTriangle * heightTriangle) / 2;
}

console.groupEnd();


// Perimeter and Area Circle
console.group("Circle");

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

console.groupEnd();