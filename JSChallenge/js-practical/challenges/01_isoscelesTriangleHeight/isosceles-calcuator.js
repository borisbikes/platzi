/**  ⬛ 🔺 🟣*/


// Steps to solve this challenge

/**
 *  1. Check about isosceles triangles theory 
 *      a. How to identify this kind of triangle
 *      b. What are the formulas to do that 
 *  2. Make those formulas into JS code with static values
 *  3. Make function to use with dynamic values
 *  4. Implement in a HTML
 * 
 * 
 * Solution:.
 * Triangle isosceles is that has 2 equal sides,
 * To calculate the height through the Pythagoras theorem a2 + b2 = c2
 *  */ 
console.group("html");

let triangleSideA = 0;
let triangleSideB = 0;
let triangleBase = 0;

let message;
/**
 * checking the kind triangle.
 * 
 */

function isIsosceles( a, b, c){
    let beOrNot = false;
    if(a == b){
        if(a != c){
            beOrNot = true;
            message = "Definitely this is an isosceles triangle!.";
           
        }else
        message = "I'm afraid, this is an equilateral triangle.";
    }else{
        message ="This triangle doesn't meet the criteria."
    }

    console.log(`${message}`);
    return beOrNot;
}


/**
 * Calculate Pythagoras Theorem 
 *  a ^ 2 + b ^ 2 = c ^ 2
 *  a = Math.sqrt((c ^ 2) - (b ^ 2) )
 */
 function triangleHeight(b, c){
    let height =   Math.sqrt((b ** 2) - ((c / 2 ) ** 2));
    console.log(`The height of this triangle is: ${height}`);
    return height;
}


// triangle html
function calculateHeightTriangle(){
    const triangleSideA = document.getElementById("inputTriangle1").value;
    const triangleSideB = document.getElementById("inputTriangle2").value;
    const triangleBase = document.getElementById("inputTriangle3").value;
    
    console.log(`Triangle sides: ${triangleSideA}, ${triangleSideB}, ${triangleBase}.`);

    let isIsos = isIsosceles(triangleSideA, triangleSideB, triangleBase);

    if(isIsos){
        let height = 0;
        height = triangleHeight(triangleSideA, triangleBase);
        alert(height);
    }else{
        alert(message);
    }

}


console.groupEnd();