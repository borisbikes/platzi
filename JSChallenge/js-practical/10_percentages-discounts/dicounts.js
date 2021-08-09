
console.group("html");
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

function onclickDiscountPrice(){
    const price = document.getElementById("inputPrice").value;
    const discount = document.getElementById("inputDiscount").value;
    const finalValue= calculateDiscountPrice(price, discount);
    console.log(finalValue);

    const finalPriceP = document.getElementById("ResultPrice");
    finalPriceP.innerText = "The price of your product with discount is $" + finalValue+ "= ";
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