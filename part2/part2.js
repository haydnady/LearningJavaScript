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

console.log(`Your age is ${calcAge(2018)}`);


// "Special" arrow function expression
const calcAge2 = birthYear => 2037 - birthYear;
console.log(`Your age is ${calcAge2(2015)}`);


// Testing
const calcAverage = (valOne, valTwo, valThree) => (valOne + valTwo + valThree) / 3;
let avgDolphins = calcAverage(85, 54, 41);
console.log(`The Dolphins average score is: ${avgDolphins}`);

let avgKoalas = calcAverage(23, 34, 27);
console.log(`The Koalas average score is: ${avgKoalas}`);


// Check winner (winner needs to have double points than other team)
function checkWinner(dataOne, dataTwo, teamOneName, teamTwoName)
{
    if (dataOne >= dataTwo*2)
    {
        console.log(`The winner is ${teamOneName} (${dataOne} vs. ${dataTwo}) 🏆`);
    }
    else if (dataTwo >= dataOne*2)
    {
        console.log(`The winner is ${teamTwoName} (${dataTwo} vs. ${dataOne}) 🏆`);
    }
    else
    {
        console.log(`The winner is no one 😂`);
    }
}

checkWinner(avgDolphins, avgKoalas, "Dolphins", "Koalas");