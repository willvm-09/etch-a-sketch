const gridSize = 600;
let squaresPerRow = 16;

const mainDiv = document.querySelector("#mainDiv");
mainDiv.style.width = `${gridSize}px`;
mainDiv.style.height = `${gridSize}px`;

const sliderContainer =document.querySelector("#sliderContainer");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

function changeBackgroundColor(){
    this.style.backgroundColor = "black";
}

function createGridCells(squaresPerRow){

    const numOfSquares = (squaresPerRow * squaresPerRow);
    const widthOrHeight = `${(gridSize / squaresPerRow) - 2}px`;
    
    for (let i=0; i<numOfSquares; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = widthOrHeight;
        gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        mainDiv.appendChild(gridCell);

        gridCell.addEventListener("mouseover", changeBackgroundColor);
        
}
}

function removeGridCells() {
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
}

createGridCells(40);