function GameOver(): boolean { // the function will check for winnner or if all cells is setted
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
    let gameoverBanner = document.getElementById('gameOver');
    gameoverBanner.innerHTML = "Game Over ,Refresh the page to start new game" + ` ,the winner is:  ${Game.Winner}`;
    gameoverBanner.style.color = 'red';
    return true;
}

function CloseTheGame(playerSign: string = "") {
    Game.BoardIsClosed = true;
    if (playerSign.length > 0) {
        Game.Winner = playerSign;
    }
    GameOverBanner();
}