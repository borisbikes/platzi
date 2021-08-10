
console.group("html");
/**
 * Calculating average, medium and mode value with static values.
 */
/*
for(let i = 0; i < list1.length; i++){
    additionList1 += list1[i];
}
const average = additionList1/list1.length;
*/
/**
 * Defining a function that bring attributes with dynamic vales
 */
const list1 = [
    100, 200, 300, 500
];

let additionList1 = 0;

function calculateAverage(values){
    /*let additionValues = 0;
    for(let i = 0; i < values.length; i++){
        additionValues += values[i];
    }*/
    const totalSum = values.reduce( 
        function(partialSum = 0, value){
            return partialSum + value;
        }
    );
    
    return totalSum/values.length;
}

//middle 

/**
 * even = par odd = impar
 * @param {*} number 
 */
function isEven(number){
    return number % 2 === 0;
}

function calculateMedium(values){
    values.sort();
    const middle = parseInt(values.length/2);
    if(isEven(values.length)){
        const middle1 = values[middle -1];
        const middle2 = values[middle];
        return calculateAverage([middle1, middle2]);
    }
    else{
        return values[middle];
    }
    
}
function calculateMode(values){
    //mode
    const counterList = {};

    values.map(
        function(element){
            //ask if the element is already exist
            if(counterList[element]){
                counterList[element] ++;
            }else{
                counterList[element] = 1;
            }
        }
    );

    //Convierte nuestro Objeto contador a un array y de paso lo ordenamos para buscar el elemento con el mayor valor encontrado
    const listArrayCount = Object.entries(counterList).sort(
        function(valueA, valueB){
            return valueA[1] - valueB[1];
        }
    );

    return listArrayCount[listArrayCount.length - 1];
}

  


console.groupEnd();