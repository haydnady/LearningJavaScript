"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// console.log(btnsOpenModal);

// Open modal function.
const openModal = function() 
{
    console.log("Button Clicked!");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// Close modal function.
const hideModal = function()
{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// Click event for all modals.
for (let i = 0; i < btnsOpenModal.length; i++)
{
    btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

document.addEventListener("keydown", function()
{
 
});