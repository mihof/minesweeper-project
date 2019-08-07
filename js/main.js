// constants
const NUM_MINES = 8;

// State variables
let board, gameOver;

// Event listeners
for (let i = 0; i < 64; i++) {
    document.getElementById(`tile${i}`).addEventListener('click', handleClick(i));
    document.getElementById(`tile${i}`).addEventListener('contextmenu', handleClick(i));
}
document.getElementById('reset').addEventListener('click', reset());

// Tile class definition
class Tile {
    constructor () {
        this.hidden = true;
        this.flag = false;
        this.value = 0;
    }
}

//Functions
init();
function init() {
    board = [];
    for (let i = 0; i < 8; i++) {
        let row = [];
        for (let j = 0; j < 8; j++) {
            row.push(new Tile);
        }
        board.push(row);
        row = [];
    }
    
    gameOver = false;
    layMines();
    setNumbers();
}

function layMines() {
    let numLaid = 0;
    //Shuffle the row 
    while (numLaid < NUM_MINES) {
        const random = Math.floor(Math.random() * 64);
        const i = Math.floor(random / 8);
        const j = random % 8;
        if (board[i][j].value !== 'X') {
            board[i][j].value = 'X';
            numLaid++;
        }
    }
}

function setNumbers() {
    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            if (board[i][j].value === 'X') {
                for (let k = -1; k < 2; k++) {
                    for (let l = -1; l < 2; l++) {
                        let tile = !(l == 0 && k == 0) && i + k >= 0 && i + k < 8 && j + l >= 0 && j + l < 8;
                        if (tile && board[i + k][j + l].value !== 'X') {
                            board[i + k][j + l].value++;
                        }
                    }
                }
            }
        }
    }
}

function win() {
  // board.forEach(board[i][j].value === 'X' && board[i][j].flag === true) [
  //    alert('Congratulations, you win!');
  // gameOver = true;
}

function reset() {
    return (event) => {
        init();
        for (let i = 0; i < 64; i++) {
            const tile = document.getElementById(`tile${i}`)
            tile.style.backgroundColor = null;
            tile.innerHTML = null;
        }
    }
}

function reveal(row, column, index) {
    board[row][column].hidden = !board[row][column].hidden;
    const tile = document.getElementById(`tile${index}`);
    if (board[row][column].value !== 0) {
        tile.innerHTML = board[row][column].value;
    } else {
        splash(row, column, index);
    }
    tile.style.backgroundColor = '#bababa';

}

function splash(row, column, index) {
    const tile = document.getElementById(`tile${index}`)
    if (board[row][column].value === 0) {
        tile.style.backgroundColor = '#bababa';
        board[row][column].hidden = !board[row][column].hidden;
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                let tile = !(i == 0 && j == 0) && row - i >= 0 && row + i < 8 && column - j >= 0 && column + j < 8;
                if (tile && board[row + i][column + j].value === 0) {
                    splash(row + i, column + j, row * 8 + column);
                } else {
                    if (board[row][column].value > 0) {
                        tile.style.backgroundColor = '#bababa';
                        board[row][column].hidden = !board[row][column].hidden;
                    }
                }
            }
        }
    } else {
        tile.style.backgroundColor = '#bababa';
        board[row][column].hidden = !board[row][column].hidden;
        tile.innerHTML = board[row][column].value;
    }
}

function handleClick(index) {
    return (event) => {
        event.preventDefault();
        if (gameOver) {
            return;
        }
        if (event.button == 0) {
            const row = Math.floor(index / 8);
            const column = index % 8;
            if (board[row][column].hidden) {
                reveal(row, column, index);
            }
            if (board[row][column].value === 'X') {
                    gameOver = true;
                    alert('Game Over');
            }
        } else if (event.button == 2) {
            board[row][column].flag = !board[row][column].flag;
        }
    }
}
