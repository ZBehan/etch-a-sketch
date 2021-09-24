const gridContainer = document.getElementById('grid');

// take in user input for grid size e.g. 16 x 16
const gridSize = 10;

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
    this.classList.add('black');
}

createGrid(gridSize);