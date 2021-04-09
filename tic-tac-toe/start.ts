let Game: GameBoard = new GameBoard();
let humanPlayer: HumanPlayer = new HumanPlayer();
let computerPlayer: ComputerPlayer = new ComputerPlayer();
computerPlayer.OpponentSign = humanPlayer.PlayerSign;
computerPlayer.GameBoard = Game;
let row: number;
let cell: number;

function clickMe(id) {
    if (!Game.BoardIsClosed) {
        row = ~~(id / 10);
        cell = id % 10;
        HumanMove(row, cell);
    }
}





