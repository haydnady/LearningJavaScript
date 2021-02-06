"use strict";


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Function for when button is clicked
document.querySelector(".check").addEventListener
("click", function () 
{
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess)

    if (!guess)
    {
        document.querySelector(".message").textContent = "⛔ No number!";
    }
    else if (guess === secretNumber)
    {
        document.querySelector(".message").textContent = "🎆 Yay you won!";
    }
    else if (guess > secretNumber)
    {
        document.querySelector(".message").textContent = "📈 Too high!";
    }
    else if (guess < secretNumber)
    {
        document.querySelector(".message").textContent = "📉 Too low!";
    }
});