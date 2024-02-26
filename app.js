//function sum(a,b) {

    //return a + b
    
//}
 
//console.log(sum(7,3));

//module.exports = { sum };


const oneEuroIs = {
    USD: 1.07,
    JPY: 129.68,
    GBP: 0.87
};

function fromEuroToDollar(total) {
    const totalInDollars = total * oneEuroIs["USD"];
    return totalInDollars;
}

function fromDollarToYen(total) {
    const totalInYen = total * oneEuroIs["JPY"] / oneEuroIs["USD"];
    return totalInYen;
}

function fromYenToPound(total) {
    const totalInPounds = total * oneEuroIs["GBP"] / oneEuroIs["JPY"];
    return totalInPounds;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
