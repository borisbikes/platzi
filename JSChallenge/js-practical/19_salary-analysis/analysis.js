/**
 * 1. Saving into an array the salaries values of Colombians
 * 2. Order the array to calculate some averages
 * 3. Calculating the medium of salaries
 */
const populationSalaries = colombia.map(
    function(person){
        return person.salary;
    }
);

//order by criteria
const orderSalaries = populationSalaries.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);
//find the medium of salaries
function isOdd(number){
    return (number % 2 == 0);
}

//function that return the average of a list of values
function calculatingAverage(values){
    const sumValues = values.reduce(
        function(accumulate = 0, value){
            return accumulate + value;
        }
    );
    return sumValues / values.length;
}

//function that return the calculus of a medium from a list of values
function mediumSalaries( orderArray ){
    const mediumIdx = parseInt(orderArray.length/2);

    if(isOdd){
        const salaryA =  orderArray[mediumIdx-1];
        const salaryB =  orderArray[mediumIdx];
        return calculatingAverage([salaryA, salaryB]);
    }else{
        return orderArray[mediumIdx];
    }
}

const generalMediumSalaries =   mediumSalaries(orderSalaries);

//TOP 10 % most expensive salaries from the order list
//obtenemos la posicion del arreglo que representa el 90 %
const spliceBegin = (orderSalaries.length * (100 - 10))/100;
//obtenemos la posicion del arreglo que reposenta el 10 % restante
///                        20         -      2          =    18
const spliceCount = orderSalaries.length - spliceBegin;

// realiza el corte en la 18 posicion y cuenta 2 posiciones para realizar el segundo corte
const salariesTop10 = orderSalaries.splice(spliceBegin, spliceCount);

const Top10MediumSalaries = mediumSalaries(salariesTop10);



console.log({
    generalMediumSalaries,
    Top10MediumSalaries,

});