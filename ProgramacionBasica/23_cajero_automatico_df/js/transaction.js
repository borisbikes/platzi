/**
 * This function has the ATM logic to calculate the quantity and amount to return at client cash request
 */

function withdrawMoney(){
    
    // cleaning the values when the other client requests a new transaction
    withdraw = [];
    message.innerHTML = "";
    
    //catching html input value amount
    amount = parseInt(document.getElementById("amount").value);
    
    if( amount <= total ){
        for(var b of cashAtm){
        
            if(amount > 0){
                div = Math.floor(amount / b.denomination);
    
                if(div > b.quantity){
                    papers = b.quantity;
    
                }else{
                    papers = div;
    
                }
                withdraw.push( new Bill(b.denomination, papers));
                amount -= (b.denomination * papers);
    
                //discount the bills when they were taken from the ATM box
                b.quantity -= papers;
    
            }
        }
        
        if( amount > 0 ){
            message.innerHTML="I'm sorry, that transaction overtake or is lees of our mount allowed. Please try in another ATM!";
    
        }else{
            for (const iterator of withdraw) {
                // take in account if is singular or plural word note
                var paperNote = iterator.quantity == 1 ?" note ": "notes " ;

                if(iterator.quantity > 0){

                    message.innerHTML +=  + iterator.quantity + " " + paperNote + 
                            "of \u00A3 " + iterator.denomination + ".<br/>";
                    
                    //cashDispenser.innerHTML=iterator.image;
                    iterator.showing();
                }
                
            }
        }
        
    }else if(total == 0){
        message.innerHTML="Out of service!";
    }else{
        message.innerHTML="I'm sorry, that transaction overtake our mount allowed. Please try in another ATM!";
    }
    getAtmBalance();
    
}

/**
 * This function get us the total amount available in a ATM
 */

 function getAtmBalance(){
    total = 0;
    for (const iterator of cashAtm) {
        total += (iterator.denomination * iterator.quantity);
    } 

    balance.innerHTML = "<strong> ATM Balance: </strong>&pound " +  total;
    
 }



/**
 * TODO control the values > the mount ATM available  e.g: Add up tp cashATM  50 and I ask for a 100 tell that the ATM doesn't have 
 * that quantity and rollback the transaction
 * Control the Bill quantity withdrew decrease the cashAtm after the amount asked has been given.
 * Show the bills with images
 * Show the total of the ATM
 */

// Starting  the ATM cash available

 var cashAtm = [];
 cashAtm.push( new Bill(50, 1));
 cashAtm.push( new Bill(20, 1));
 cashAtm.push( new Bill(10, 1));

 // Stating the container to insert the cash to return at the client
 var withdraw = [];
 //That the value requested by the client
 var amount = 0;
 //represent the division result 'quotient'
 var div = 0;
 // temporary field to save the number of bills to get in each denomination
 var papers = 0;

 //show the total amount available in the ATM
 var total = 0;

 // document.getElementById(<id_html_element>) allow to take the properties from this html element
 var button = document.getElementById("request");

 // when that element is shotted by the click event, it'll calls the withdrawMoney function
 button.addEventListener("click", withdrawMoney);

//get the properties from the html element <p id="response">
 var message = document.getElementById("response");

 //get the properties from the html element <p id="atm-balance">
 var balance = document.getElementById("atm-balance");

 var cashDispenser = document.getElementById("cash");
//know the actual balance
getAtmBalance();