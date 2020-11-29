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


// Data structure arrays
 const friends = ["Ven", "Tren", "Zen"];
 friends.push("Jyen"); // Adds to end of array
 friends.unshift("Gen"); // Adds to begining of array
 console.log(`Friends array: ${friends}`);
 friends.pop("Zen"); // Removes from the array
 console.log(`New friends array: ${friends}`);
 friends.shift(); // Removes 1st element from the array
 console.log(`New friends array with 1st element removed: ${friends}`);

// Object
const jonas = {
    firstName: "Jonas",
    lastName: "Sc",
    age: 45,
    friends: ["Ben", "Boe", "Tan"]
} 

console.log(jonas.firstName);

// For loops
for (let rep = 1; rep <= 10; rep++)
{
    console.log(`Rep ${rep} 🏋️‍♀️`)
}

// For loop backward
for (let i = 4; i >= 1; i--)
{
    console.log(`Countdown: ${i}`)
}

// While loop (horrible example)
let rep = 2
while (rep === 2)
{
    console.log(`Squat ${rep}`);
    rep = 1
    console.log(`Squat ${rep}`);
}