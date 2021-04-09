var GameBoard = /** @class */ (function () {
    function GameBoard() {
        this.boardIsClosed = false;
        this.winner = "no one";
        this.boardArr = new Array(3);
        for (var i = 0; i < this.boardArr.length; i++) {
            this.boardArr[i] = new Array(3);
        }
    }
    Object.defineProperty(GameBoard.prototype, "BoardIsClosed", {
        get: function () {
            return this.boardIsClosed;
        },
        set: function (b) {
            this.boardIsClosed = b;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameBoard.prototype, "Winner", {
        get: function () {
            return this.winner;
        },
        set: function (w) {
            this.winner = w;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameBoard.prototype, "BoardArr", {
        get: function () {
            return this.boardArr;
        },
        enumerable: false,
        configurable: true
    });
    GameBoard.prototype.SetCellValue = function (row, cell, value) {
        if (this.boardArr[row][cell] == undefined) {
            this.boardArr[row][cell] = value;
            this.DrawCell(value, row, cell);
        }
        else {
            throw new Error("cell is not empty");
        }
    };
    GameBoard.prototype.IsWinner = function (playerSign) {
        for (var row_1 = 0; row_1 < this.BoardArr.length; row_1++) {
            if (this.BoardArr[row_1][0] == playerSign && this.BoardArr[row_1][1] == playerSign && this.BoardArr[row_1][2] == playerSign) {
                return true;
            }
        }
        for (var cell_1 = 0; cell_1 < this.BoardArr.length; cell_1++) {
            if (this.BoardArr[0][cell_1] == playerSign && this.BoardArr[1][cell_1] == playerSign && this.BoardArr[2][cell_1] == playerSign) {
                return true;
            }
        }
        if ((this.BoardArr[0][0] == playerSign && this.BoardArr[1][1] == playerSign && this.BoardArr[2][2] == playerSign) ||
            (this.BoardArr[0][2] == playerSign && this.BoardArr[1][1] == playerSign && this.BoardArr[2][0] == playerSign)) {
            return true;
        }
        return false;
    };
    GameBoard.prototype.IsAllCellsSetted = function (a, b) {
        var counter = 0;
        for (var i = 0; i < this.BoardArr.length; i++) {
            for (var j = 0; j < this.BoardArr[i].length; j++) {
                if (this.BoardArr[i][j] == a.PlayerSign || this.BoardArr[i][j] == b.PlayerSign) {
                    counter++;
                }
            }
        }
        if (counter == 9) {
            return true;
        }
        return false;
    };
    GameBoard.prototype.DrawCell = function (value, row, cell) {
        var id = "" + row + cell;
        var td = document.getElementById(id);
        td.innerHTML = value;
        td.setAttribute('style', 'text-align:center;font-weight: bold;font-size:30px;');
        if (value == "x") {
            td.style.color = 'green';
        }
        else {
            td.style.color = 'blue';
        }
    };
    return GameBoard;
}());
//# sourceMappingURL=GameBoardClass.js.map