// constants


// State variables
let board, winner, reset;

//Functions
init();
function init() {
    board = new Array(64).fill("X", 0, 10, null);
    winner = null;
    shuffle(board);
    console.log(board);
    //render();
}

function shuffle(board) {
    //Shuffle the board (Durstenfeld Shuffle)
    for (let i = board.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [board[i], board[j]] = [board[j], board[i]];
    }
}


function dimensionArr(list, SubArr) {
    //Turns board into a 2D array
    board = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % SubArr === 0) {
            k++;
            matrix[k] = [];
        }

        board[k].push(list[i]);
    }

    return board;
}


function render() {
    board.forEach(function(lat, indx) {
        strip.forEach(function(long, idx) {
            let tile = document.getElementById(`tile${idx}`);
            //Connects the array to the buttons
        })
        
    });

}
