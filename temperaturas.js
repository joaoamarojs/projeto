function fahrenheit(temp){
    return parseFloat(((9*parseFloat(temp)/5) + 32).toFixed(2)) ;
}

function celsius(temp){
    return parseFloat((5*(parseFloat(temp) - 32) / 9).toFixed(2)) ;
}

module.exports = {fahrenheit, celsius};