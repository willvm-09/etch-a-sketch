const gridSize = 600;
let rows = 16;
let columns = 16;

const mainDiv = document.querySelector("#mainDiv");
mainDiv.style.width = `${gridSize}px`;
mainDiv.style.height = `${gridSize}px`;

function createGridCells(){
    for (let i=0; i<(rows * columns); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(gridSize /columns) - 2}px`;
        gridCell.style.height = `${(gridSize / rows) - 2}px`;
        gridCell.classList.add("cell");

        mainDiv.appendChild(gridCell);
    }
}

createGridCells();