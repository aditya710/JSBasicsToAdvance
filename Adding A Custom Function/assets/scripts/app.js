const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2){
    const result = num1 + num2;
    return result;
}

add(1,2);
add(5,2);

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);