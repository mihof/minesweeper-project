// constants
const NUM_MINES = 12;

// State variables
let board, winner, reset, gameOver;

// Event listeners
for (let i = 0; i < 64; i++) {
    document.getElementById(`tile${i}`).addEventListener('click', handleClick(i));
    document.getElementById(`tile${i}`).addEventListener('contextmenu', handleClick(i));
}

// Square class definition
class Square {
    constructor (hidden, flag, value) {
        this.hidden = hidden;
        this.flag = flag;
        this.value = value;
    }
}

//Functions
init();
function init() {
    board = [
        [new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0)],
        [new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0)],
        [new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0)],
        [new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0)],
        [new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0)],
        [new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0)],
        [new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0)],
        [new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0), new Square(true, false, 0)],
    ];
    gameOver = false;
    layMines();
    setNumbers();

    //render();
}

function layMines() {
    let numLaid = 0;
    //Shuffle the row (Durstenfeld Shuffle)
    while (numLaid < NUM_MINES) {
        for (let i = 0; i < board.length - 1; i++) {
            for (let j = 0; j < board[i].length - 1; j++) {
                const random = Math.floor(Math.random() * 2);
                if (random) {
                    board[i][j].value = 'X';
                    numLaid++;
                }
            }
        }
    }
}

function setNumbers() {
    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            if (board[i][j] === 'X') {
                for (let k = -1; k < 2; k++) {
                    for (let l = -1; l < 2; l++) {
                        let tile = !(l == 0 && k == 0) && (i + k >= 0 && i + k < 8 && j + l >= 0 && j + l < 8);
                        if (tile && board[i + k][j + l] !== 'X') {
                            board[i + k][j + l].value++;
                        }
                    }
                }
            };
        }
    }
}

function win() {
    
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
                board[row][column].hidden = !board[row][column].hidden;
            }
            if (board[row][column].value === 'X') {
                    gameOver = true;
                    alert('Game Over');
            }
        } else if (event.button == 2) {
            board[row][column].flag = !board[row][column].flag;
        }
    }
};

function render() {
    Board.forEach(function (lat, i) {
        board.forEach(function (long, j) {
            let tile = document.getElementById(`tile${j}`);
            //Connects the array to the buttons
        })

    });

}
