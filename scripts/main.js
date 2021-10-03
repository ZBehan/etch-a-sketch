const gridContainer = document.getElementById('grid');

const clearGridButton = document.getElementById('clear-grid-button');
clearGridButton.addEventListener('click', resizeGrid);

const solidColourButton = document.getElementById('solid-colour-button');
solidColourButton.addEventListener('click', () => {
    changeColourInputType('solid');
});

const randomColourButton = document.getElementById('random-colour-button');
randomColourButton.addEventListener('click', () => {
    changeColourInputType('random');
});

const shadeColourButton = document.getElementById('shade-colour-button');
shadeColourButton.addEventListener('click', () => {
    changeColourInputType('shade');
});

// take in user input for grid size e.g. 16 x 16
const gridSize = 16;

function createGrid(gridSize) {
    // create 16 rows
    // begin with rowCount at 0 and add 1 to rowCount on each pass until rowCount is equal to 16
    for (let rowCount = 0; rowCount < gridSize; rowCount++) {
        // create a new element called newRow
        const newRow = document.createElement('div');
        // add a class "row" to newRow
        newRow.classList.add('row');
        // create 16 cells within newRow
        // begin with cellCount at 0 and add 1 to cellCount on each pass until cellCount is equal to 16
        for (let cellCount = 0; cellCount < gridSize; cellCount++) {
            // create a new element called newCell
            const newCell = document.createElement('div');
            // add a class "cell" to newCell
            newCell.classList.add('cell');
            // add newCell to newRow
            newRow.appendChild(newCell);

            newCell.addEventListener('mouseenter', changeCellColour);
        }

        // add newRow to gridContainer
        gridContainer.appendChild(newRow);
    }
}

function changeCellColour(cell) {
    cell.target.classList.add('black');
}

function resizeGrid() {
    const userInput = prompt("What size do you want? Between 8 and 64.");
    // remove all elements in currently in grid
    deleteGrid();
    // create grid at user input size
    createGrid(userInput);
}

function deleteGrid() {
    // delete all items
    // might be able to redo the createGrid function to return an element and put it in the replaceChildren() funcction
    gridContainer.replaceChildren();
}

function changeColourInputType(type) {
    console.log(createRandomRGBColour());
}

function generateRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function createRandomRGBColour() {
    return `${generateRandomNum(256)},${generateRandomNum(256)},${generateRandomNum(256)}`;
}

createGrid(gridSize);