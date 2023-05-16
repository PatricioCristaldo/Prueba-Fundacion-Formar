function number_cardinality(number) {
    switch (true) {
        case number % 10 === 0 :
            number = "zero"
            break;
        case number % 10 === 5 :
            number = "five"
            break;
        case number % 2 === 0 && number % 10 !== 0 :
            number = "even"
            break;
        case number % 2 !== 0 && number % 10 !== 5 :
            number = "odd"
            break;
        default: ""
            break;
    }
    return number
}
console.log(number_cardinality(0));
console.log(number_cardinality(5));  
console.log(number_cardinality(12));  
console.log(number_cardinality(3));