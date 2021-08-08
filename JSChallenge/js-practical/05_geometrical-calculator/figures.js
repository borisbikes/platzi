/**  ⬛ 🔺 🟣*/

// Perimeter and Area Squared
console.group("Squared")

const sideSquared = 5;
console.log(`Each squared sides measure: ${sideSquared}cm.`);

const perimeterSquared = sideSquared * 4;
console.log(`The perimeter of this squared is: ${perimeterSquared}cm.`);

const areaSquared = sideSquared * sideSquared;
console.log(`The area of this squared is: ${areaSquared}cm ^ 2.`);

console.groupEnd();

// Perimeter and Area Triangle
console.group("Triangle");

const sideTriangle1 = 6;
const sideTriangle2 = 6;
const baseTriangle = 4;
const heightTriangle = 5.5;
console.log(`The triangle sides measure: ${sideTriangle1}cm, ${sideTriangle2}cm, ${baseTriangle}cm.`);
console.log(`The height triangle measure: ${heightTriangle}cm.`);

const perimeterTriangle = sideTriangle1 + sideTriangle2 + baseTriangle;
console.log(`The perimeter of this triangle is: ${perimeterTriangle}cm.`);

const areaTriangle = (baseTriangle * heightTriangle) / 2;
console.log(`The area of this triangle is: ${areaTriangle}cm ^ 2.`);

console.groupEnd();


// Perimeter and Area Circle
console.group("Circle");

const radiusCircle = 4;
const diameterCircle = radiusCircle * 2;
const PI = Math.PI; // 3.1451...
console.log(`The radius of this circle is: ${radiusCircle}cm.`);

const perimeterCircle = diameterCircle * PI;
console.log(`The perimeter of this circle is: ${perimeterCircle}cm.`);

const areaCircle = (radiusCircle * radiusCircle) * PI;
console.log(`The area of this circle is: ${areaCircle}cm ^ 2.`);

console.groupEnd();