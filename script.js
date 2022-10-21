"use strict";

const container = document.querySelector(".container");
const selectSquares = document.getElementById("numSquares");

const newArr = [];

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(num) {
    removeAllChildNodes(container);
    for (let i = 0; i < num; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square-div");
        let heightSize = 320 / Math.sqrt(num);
        newDiv.style.height = `${heightSize}px`;
        newDiv.style.width = `${heightSize}px`;
        container.append(newDiv);
    }
}

function numberOfGrids() {
    let numOfSquares = this.value;
    let numOfGrids = numOfSquares ** 2;
    createGrid(numOfGrids);
}

selectSquares.addEventListener("change", numberOfGrids);

function randomNumber() {
    const randomNum = Math.round(Math.random() * 255);
    return randomNum;
}

container.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
});

// let opacity = 0;
// function increaseOpacity () {

// }