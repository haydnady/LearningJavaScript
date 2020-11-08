"use strict";

// Function declaration
function logger()
{
    console.log(`JavaScript is FUN!!!`);
}

// Call function
logger();
logger();
logger();

function fruitProcessor(apples, oranges)
{
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    return juice;
}

const order = fruitProcessor(5, 9);
console.log(`You order is: ${order}`)

// Function expression
const calcAge = function (birthYear)
{
    return 2037 - birthYear;
}

console.log(`Your age is ${calcAge(2018)}`)