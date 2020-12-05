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
    for (var i = 0; i < theArray.length; i++)
    {
        if (i == 0)
        {
            console.log(`... ${theArray[0]}C in ${i+1} days`);
        }
        else if ((i+1) == theArray.length)
        {
            console.log(`... ${theArray[-1]}C in ${i+1} days`);
        }
        else
        {
            console.log(`... ${theArray[i]}C in ${i+1} days ...`);
        }
    }
}

console.log(printForcast([17, 21, 23]));