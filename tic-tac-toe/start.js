var Game = new GameBoard();
var humanPlayer = new HumanPlayer();
var computerPlayer = new ComputerPlayer();
computerPlayer.OpponentSign = humanPlayer.PlayerSign;
computerPlayer.GameBoard = Game;
var row;
var cell;
function clickMe(id) {
    if (!Game.BoardIsClosed) {
        row = ~~(id / 10);
        cell = id % 10;
        HumanMove(row, cell);
    }
}
//# sourceMappingURL=start.js.map