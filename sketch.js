const gridSize = 600;
let squaresPerRow = 16;

const mainDiv = document.querySelector("#mainDiv");
mainDiv.style.width = `${gridSize}px`;
mainDiv.style.height = `${gridSize}px`;

const sliderContainer =document.querySelector("#sliderContainer");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");

sliderValue.textContent = `${slider.value} x ${slider.value} Resolution`;

function blackBackgroundColor(){
    this.style.backgroundColor = "black";
}


function createGridCells(squaresPerRow){

    let numOfSquares = (squaresPerRow * squaresPerRow);
    let widthOrHeight = `${(gridSize / squaresPerRow) - 2}px`;
    
    for (let i=0; i<numOfSquares; i++) {
        let gridCell = document.createElement("div");
        gridCell.style.width = widthOrHeight;
        gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        mainDiv.appendChild(gridCell);

        gridCell.addEventListener("mouseover", blackBackgroundColor);

}

function removeGridCells() {
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
}

slider.oninput = function () {
    let txt = `${this.value} x ${this.value} Size`; 
    sliderValue.innerHTML = txt;
    removeGridCells();
    createGridCells(this.value);
}

let resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => location.reload());
};
 createGridCells(16);