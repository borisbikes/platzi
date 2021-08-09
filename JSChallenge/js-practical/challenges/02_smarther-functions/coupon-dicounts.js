/** 🛒 🎁 💰 💳*/


// Steps to solve this challenge

/**
 *  1. Check about discount through coupons 
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
const coupons = [
    { name: "Cyber-Monday", discount: 40},
    { name: "Black-Friday", discount: 60},
    { name: "JUST4U", discount: 15}
];

/**
 * Calculating discount price with static values.
 */
//const percentageDiscountPrice = 100 - discount;
//const discountPrice = (fullPrice * percentageDiscountPrice)/100;

/**
 * Difining a function that bring attributes with dynamic vales
 */

function calculateDiscountPrice(price, discount){
    const percentageWhitDiscountPrice = 100 - discount;
    const discountPrice = (price * percentageWhitDiscountPrice)/100;
    return discountPrice;
}

function calculateDiscountByCoupon(phrase){
    const result = 
    coupons.filter(function(coupon){
        return coupon.name == phrase;
    })
    return result;
}


function onclickDiscountPrice(){
    const price = document.getElementById("inputPrice").value;
    const couponDiscount = document.getElementById("inputDiscount").value;
    const coupon = calculateDiscountByCoupon(couponDiscount);
    let finalValue = 0;
    const finalPriceP = document.getElementById("ResultPrice");

    if (coupon != undefined){
        finalValue= calculateDiscountPrice(price, coupon[0].discount);
    
        console.log(finalValue);
    
        
        finalPriceP.innerText = "😎The price of your product with discount is $" + finalValue+ "= ";
    }else{
        finalPriceP.innerText = "🙄The price of your product doesn't have any discount $" + price+ "= ";
    }
    
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