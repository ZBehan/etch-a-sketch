const gridContainer = document.getElementById('grid');
gridContainer.addEventListener('mouseover', (e) => {
    changeCellColour(e.target);
})

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
let colourMode = 'solid';

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
            newCell.style['background-color'] = 'rgba(255,255,255)';
            // add newCell to newRow
            newRow.appendChild(newCell);
        }

        // add newRow to gridContainer
        gridContainer.appendChild(newRow);
    }
}

function changeCellColour(cell) {
    let backgroundColour = '';

    if (colourMode === 'solid') {
        backgroundColour = 'rgb(0,0,0)';
    } else if (colourMode === 'random') {
        backgroundColour = `rgb(${createRandomRGBColour()})`;
    } else if (colourMode === 'shade') {
        backgroundColour = shadeColour(cell);
    }

    cell.style['background-color'] = backgroundColour;
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
    colourMode = type;
}

function generateRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function createRandomRGBColour() {
    return `${generateRandomNum(256)},${generateRandomNum(256)},${generateRandomNum(256)}`;
}

function shadeColour(cell) {
    const amountOfBlack = 25.6;
    // get current rgb value
    let currentColour = cell.style['background-color'];
    // separate the values
    currentColour = currentColour.replace(/[^\d,.]/g, '') // Use regex to match everything except digits, commands and periods. Replace characters that are matched with nothing.
        .split(','); // split the resultant string into an array using the comma as the split point

    // reduce each value by the amount of black
    currentColour[0] = +currentColour[0] - amountOfBlack;
    currentColour[1] = +currentColour[1] - amountOfBlack;
    currentColour[2] = +currentColour[2] - amountOfBlack;

    // create a string of the new rgb values
    const newColour = currentColour.join(',');
    // apply the new rgb value to the background
    cell.style['background-color'] = `rgba(${newColour})`;
}

createGrid(gridSize);