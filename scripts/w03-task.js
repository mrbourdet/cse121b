/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    return number1 + number2
}
function addNumbers ()
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2)
{
    return number1 - number2
}
const subtractNumbers = function ()
{
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) =>
{
    return number1 * number2;
}
const multiplyNumbers = () =>
{
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', (multiplyNumbers));

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) =>
{
    return dividend / divisor;
}
const divideNumbers = () =>
{
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', (divideNumbers));

/* Decision Structure */
const calcDiscount = (subtotal) =>
{
    let boxChecked = document.getElementById("member");

    if (boxChecked.checked)
    {
        document.getElementById("total").textContent = `$${parseFloat(subtotal* 1.15).toFixed(2)}`;
    }
    else 
    {
        document.getElementById("total").textContent = `$${parseFloat(subtotal).toFixed(2)}`;
    }
}
const getTotal = () => 
{
    const subtotal = Number(document.querySelector('#subtotal').value);
    calcDiscount(subtotal);
}
document.querySelector('#getTotal').addEventListener('click', (getTotal));

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").textContent = numbersArray.join();

/* Output Odds Only Array */
document.getElementById("odds").textContent = numbersArray.filter((number) => number % 2 == 1);
/* Output Evens Only Array */
document.getElementById("evens").textContent = numbersArray.filter((number) => number % 2 == 0);
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").textContent = numbersArray.map((number) => number * 2);
/* Output Sum of Multiplied by 2 Array */
let array2 = numbersArray.map((number) => number * 2);
document.getElementById("sumOfMultiplied").textContent = array2.reduce((sum, number) => sum + number);