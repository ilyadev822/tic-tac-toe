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
var test = ["x", 1, "x", "y", "y", 5, 6, 7, 8];
prompt("test array : \n " + printArr());
function printArr() {
    var myStr = "|";
    for (var i = 0; i < Game.BoardArr.length; i++) {
        for (var j = 0; j < Game.BoardArr[i].length; j++) {
            myStr += Game.BoardArr[i][j] + "|";
        }
        myStr += " \n";
        myStr += " --------- ";
        myStr += " \n";
    }
    return myStr;
}
//# sourceMappingURL=start.js.map