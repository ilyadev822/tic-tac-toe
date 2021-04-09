function GameOver() {
    if (Game.IsWinner(humanPlayer.PlayerSign)) {
        CloseTheGame(humanPlayer.PlayerSign);
        return true;
    }
    else if (Game.IsWinner(computerPlayer.PlayerSign)) {
        CloseTheGame(computerPlayer.PlayerSign);
        return true;
    }
    else if (Game.IsAllCellsSetted(humanPlayer, computerPlayer)) {
        CloseTheGame();
        return true;
    }
    return false;
}
function GameOverBanner() {
    var gameoverBanner = document.getElementById('gameOver');
    gameoverBanner.innerHTML = "Game Over ,Refresh the page to start new game" + (" ,the winner is:  " + Game.Winner);
    gameoverBanner.style.color = 'red';
    return true;
}
function CloseTheGame(playerSign) {
    if (playerSign === void 0) { playerSign = ""; }
    Game.BoardIsClosed = true;
    if (playerSign.length > 0) {
        Game.Winner = playerSign;
    }
    GameOverBanner();
}
//# sourceMappingURL=GameOverFunctions.js.map