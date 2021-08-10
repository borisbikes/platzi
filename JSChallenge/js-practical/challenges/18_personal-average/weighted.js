/** 🛒 🎁 💰 💳*/


// Steps to solve this challenge

/**
 *  1. Check about discount through weight average  
 *  2. Make those formulas into JS code with static values
 *  3. Make function to use with dynamic values
 *  4. Implement in a HTML
 * 
 * 
 * Solution:.
 * The web coupons are some phrases when our customers set then in the final price 
 * they will be able to see a less price to pay 
 *  */ 

console.group("html");
const notes = [
    { course: "Sports", note: 10, credit: 2 },
    { course: "Programming", note: 8, credit: 5 },
    { course: "Personal finances", note: 7, credit: 5 }
];

/**
 * Calculating weight average price with static values.
 */
//const weightAverage = (vale1 * height1) + (vale2 * height2) + (vale3 * height3)
//                      /(height1 + height2 + height3);

/**
 * Steps
 * 1.  Calculate numerator
 *      a. take in one array just te values to find the product
 *      b. safe the total addition of each product in a value
 * 2. Calculate denominator
 */
/*
const numeratorProducts = notes.map(
    function(value){
        return value.note * value.credit;
    }
);

const totalNumerator = numeratorProducts.reduce(
    function(sum = 0, value){
        return sum + value;
    }
);

const denominatorHeights = notes.map(
    function(value){
        return value.credit;
    }
);

const totalDenominator = denominatorHeights.reduce(
    function(sum = 0, value){
        return sum + value;
    }
);

const weightResult= totalNumerator / totalDenominator;

console.log(weightResult);

/**
 * Steps
 * 1.  Calculate numerator
 * 2. Calculate denominator
 * Defining a function that bring attributes with dynamic vales
 */

function calculateWeightAverage(notes){
    
    const numeratorProducts = notes.map(
        function(value){
            return value.note * value.credit;
        }
    );
    
    const totalNumerator = numeratorProducts.reduce(
        function(sum = 0, value){
            return sum + value;
        }
    );
    
    const denominatorHeights = notes.map(
        function(value){
            return value.credit;
        }
    );
    
    const totalDenominator = denominatorHeights.reduce(
        function(sum = 0, value){
            return sum + value;
        }
    );
    
    const weightResult= totalNumerator / totalDenominator;
    
    console.log(weightResult);
    return weightResult;
}


function onclickWeightAverage(){

    
}
/**
 * printing in console values as an object
 *
console.log({
    fullPrice,
    discount
});

*/
console.groupEnd();