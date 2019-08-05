// constants


// State variables
let board, winner, reset;

//Functions
init();
function init() {
    board = new Array(64).fill("X", 0, 12, 0);
    winner = null;
    shuffle(board);
    let newBoard = [];
    while (board.length) newBoard.push(board.splice(0, 8));
    /*newBoard.forEach(function(strip, indx) {
        strip.forEach(function(tile, idx) {
                if (tile === "X") {
                    strip[idx - 1] += 1;
                    strip[indx - 1][idx] += 1;
                    strip[indx - 1][idx - 1] += 1;
                    strip[indx - 1][idx + 1] += 1;
                    strip[idx + 1] += 1;
                    strip[indx + 1][idx] += 1;
                    strip[indx + 1][idx - 1] += 1;
                    strip[indx + 1][idx + 1] += 1;

                };
        });
    });*/
    console.log(newBoard);
    //render();
}

function shuffle(board) {
    //Shuffle the board (Durstenfeld Shuffle)
    for (let i = board.length -1; i > 0; i--) {
        //Randomly selecting values from the array, but not more than once per value
        const j = Math.floor(Math.random() * (i + 1));
        //Placing values into the array (i is the index, j is the value)
        [board[i], board[j]] = [board[j], board[i]];
    }
}


function render() {
    newBoard.forEach(function(lat, indx) {
        strip.forEach(function(long, idx) {
            let tile = document.getElementById(`tile${idx}`);
            //Connects the array to the buttons
        })
        
    });

}
