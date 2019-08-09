###Minesweeper

'Minesweeper is a single-player puzzle computer game. The objective of the game is to clear a rectangular board containing hidden "mines" (represented by "X"s with this version) or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.' (Wikipedia, first paragraph) Flag the bombs to remember where they are placed. To win you must click on all the tiles that are not bombs.

Play the game [here](https://mihof.github.io/minesweeper-project/)

JavaScript:
  * Constants are board, winner, reset
  * Function init set up board, call win/loss, reset
  * Event listeners for click on a tile, click on the marker, click on reset
  * Randomize mines and set += 1 values for surrounding (offset) array values
  * On click, display surrounding null values until a tile value is found
  * If marker is activated, tiles clicked will be made unclickable. If tile is already unclickable it will be made clickable
  * If all mines are marked, player wins
  * If player clicks on a mine, player loses

HTML:
  * Section followed by an h6 how to flag and a reset button
  * Section followed by 64 buttons
  * Each button has its own id

CSS:
  * Set the display to flex
  * Center the items
  * No outline on the button
  * Set the board to an 8 by 8 grid


