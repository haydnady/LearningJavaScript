"use strict";

// Table example
const myObject = {
    "1": "One",
    "2": "Two",
    "3": "Three"
};

console.table(myObject);

function printForcast(theArray) 
{
    let str = "";
    for (var i = 0; i < theArray.length; i++) 
    {

        str += (`${theArray[i]}C in ${i + 1} days ... `);
    }

    return "... " + str
}

console.log(printForcast([17, 21, 23]));