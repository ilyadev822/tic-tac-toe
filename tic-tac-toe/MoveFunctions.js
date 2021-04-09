//*Computer movement: first the computer trying to win ,anf if he cant win he will check if  can loose the game and will block opponent ,otherwise he will do random move
function CompMove(choice) {
    if (choice == 5) {
        computerPlayer.Move();
    }
    else if (computerPlayer.TryToWinOrBlock(choice)) {
        if (choice == 4) {
            return;
        }
        else {
            GameOver();
            return;
        }
    }
    else {
        choice++;
        CompMove(choice);
    }
}
function HumanMove(row, cell) {
    humanPlayer.Row = row;
    humanPlayer.Cell = cell;
    try {
        humanPlayer.Move();
        if (!GameOver()) {
            CompMove(1);
        }
    }
    catch (e) {
        alert(e);
    }
}
//# sourceMappingURL=MoveFunctions.js.map