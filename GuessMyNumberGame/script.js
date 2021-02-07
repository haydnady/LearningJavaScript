"use strict";


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(`The secret number is: ${secretNumber}`)


// Function for when check button is clicked
document.querySelector(".check").addEventListener
("click", function () 
{
    const guess = Number(document.querySelector(".guess").value);

    if (score <= 0)
    {
        document.querySelector(".message").textContent = "😿 Game Over!";
        document.querySelector(".score").textContent = score;
    }
    else
    {
        if (!guess)
        {
            document.querySelector(".message").textContent = "⛔ No number!";
        }
        else if (guess === secretNumber)
        {
            document.querySelector(".message").textContent = "🎆 Yay you won!";
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").textContent = secretNumber;
            if (highScore < score)
            {
                document.querySelector(".highscore").textContent = score;
            }
        }
        else
        {
            document.querySelector(".message").textContent = 
            guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
            document.querySelector(".score").textContent = score--;
        }
    }
});


// Function for when again button is clicked
document.querySelector(".again").addEventListener
("click", function () 
{
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`The secret number is: ${secretNumber}`)

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";
    document.querySelector(".message").textContent = "Start guessing...";    
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
});