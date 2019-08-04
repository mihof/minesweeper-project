// constants


// State variables
const board, winner, reset;

//Functions
function init() {
    board = [
        [0, 1, "X", "X", 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, "X", 1],
        [0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 1, "X", 1, 1, 0],
        [0, 0, 0, 1, "X", "X", 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, "X", 1, 1, 1, 0, 0],
        [0, 1, 1, 1, "X", 1, 0, 0],
    ]
    winner = null;
    render();
}

function render() {
    board.forEach(function(strip, indx) {
        strip.forEach(function(tile, idx) {
            
        })
        
    });

}