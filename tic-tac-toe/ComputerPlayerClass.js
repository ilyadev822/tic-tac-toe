var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ComputerPlayer = /** @class */ (function (_super) {
    __extends(ComputerPlayer, _super);
    function ComputerPlayer() {
        var _this = _super.call(this) || this;
        _this.PlayerSign = "O";
        return _this;
    }
    Object.defineProperty(ComputerPlayer.prototype, "GameBoard", {
        get: function () {
            return this.gameBoard;
        },
        set: function (g) {
            this.gameBoard = g;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ComputerPlayer.prototype, "OpponentSign", {
        get: function () {
            return this.opponentSign;
        },
        set: function (o) {
            this.opponentSign = o;
        },
        enumerable: false,
        configurable: true
    });
    ComputerPlayer.prototype.Move = function () {
        try {
            Game.SetCellValue(this.getRandomNum(0, 2), this.getRandomNum(0, 2), this.PlayerSign);
        }
        catch (_a) {
            this.Move();
        }
    };
    ComputerPlayer.prototype.TryToWinOrBlock = function (num) {
        switch (num) {
            case 1: {
                return this.AcrossChekcer(this.PlayerSign);
            }
            case 2: {
                return this.ColumnChecker(this.PlayerSign);
            }
            case 3: {
                return this.RowChecker(this.PlayerSign);
            }
            case 4: {
                return this.OpponentBlock();
            }
        }
    };
    //**Private Checkers for opponent block or  try to win**/
    ComputerPlayer.prototype.OpponentBlock = function () {
        if (this.AcrossChekcer(this.PlayerSign, this.OpponentSign)) {
            return true;
        }
        else if (this.RowChecker(this.PlayerSign, this.OpponentSign)) {
            return true;
        }
        else if (this.ColumnChecker(this.PlayerSign, this.OpponentSign)) {
            return true;
        }
        return false;
    };
    ComputerPlayer.prototype.AcrossChekcer = function (mySign, oppSign) {
        if (oppSign === void 0) { oppSign = mySign; }
        if (this.GameBoard.BoardArr[0][0] == oppSign && this.GameBoard.BoardArr[1][1] == oppSign && this.GameBoard.BoardArr[2][2] == undefined) {
            Game.SetCellValue(2, 2, mySign);
            return true;
        }
        else if (this.GameBoard.BoardArr[0][0] == undefined && this.GameBoard.BoardArr[1][1] == oppSign && this.GameBoard.BoardArr[2][2] == oppSign) {
            Game.SetCellValue(0, 0, mySign);
            return true;
        }
        else if (this.GameBoard.BoardArr[0][0] == oppSign && this.GameBoard.BoardArr[1][1] == undefined && this.GameBoard.BoardArr[2][2] == oppSign) {
            Game.SetCellValue(1, 1, mySign);
            return true;
        }
        else if (this.GameBoard.BoardArr[2][0] == undefined && this.GameBoard.BoardArr[1][1] == oppSign && this.GameBoard.BoardArr[0][2] == oppSign) {
            Game.SetCellValue(2, 0, mySign);
            return true;
        }
        else if (this.GameBoard.BoardArr[2][0] == oppSign && this.GameBoard.BoardArr[1][1] == undefined && this.GameBoard.BoardArr[0][2] == oppSign) {
            Game.SetCellValue(1, 1, mySign);
            return true;
        }
        else if (this.GameBoard.BoardArr[2][0] == oppSign && this.GameBoard.BoardArr[1][1] == oppSign && this.GameBoard.BoardArr[0][2] == undefined) {
            Game.SetCellValue(0, 2, mySign);
            return true;
        }
        else {
            return false;
        }
    };
    ComputerPlayer.prototype.ColumnChecker = function (mySign, oppSign) {
        if (oppSign === void 0) { oppSign = mySign; }
        for (var cell_1 = 0; cell_1 < this.GameBoard.BoardArr.length; cell_1++) {
            if (this.GameBoard.BoardArr[0][cell_1] == oppSign && this.GameBoard.BoardArr[1][cell_1] == oppSign && this.GameBoard.BoardArr[2][cell_1] == undefined) {
                this.GameBoard.SetCellValue(2, cell_1, mySign);
                return true;
            }
            else if (this.GameBoard.BoardArr[1][cell_1] == oppSign && this.GameBoard.BoardArr[2][cell_1] == oppSign && this.GameBoard.BoardArr[0][cell_1] == undefined) {
                this.GameBoard.SetCellValue(0, cell_1, mySign);
                return true;
            }
            else if (this.GameBoard.BoardArr[0][cell_1] == oppSign && this.GameBoard.BoardArr[2][cell_1] == oppSign && this.GameBoard.BoardArr[1][cell_1] == undefined) {
                this.GameBoard.SetCellValue(1, cell_1, mySign);
                return true;
            }
        }
        return false;
    };
    ComputerPlayer.prototype.RowChecker = function (mySign, oppSign) {
        if (oppSign === void 0) { oppSign = mySign; }
        for (var row_1 = 0; row_1 < this.GameBoard.BoardArr.length; row_1++) {
            if (this.GameBoard.BoardArr[row_1][0] == oppSign && this.GameBoard.BoardArr[row_1][1] == oppSign && this.GameBoard.BoardArr[row_1][2] == undefined) {
                this.GameBoard.SetCellValue(row_1, 2, mySign);
                return true;
            }
            else if (this.GameBoard.BoardArr[row_1][1] == oppSign && this.GameBoard.BoardArr[row_1][2] == oppSign && this.GameBoard.BoardArr[row_1][0] == undefined) {
                this.GameBoard.SetCellValue(row_1, 0, mySign);
                return true;
            }
            else if (this.GameBoard.BoardArr[row_1][0] == oppSign && this.GameBoard.BoardArr[row_1][2] == oppSign && this.GameBoard.BoardArr[row_1][1] == undefined) {
                this.GameBoard.SetCellValue(row_1, 1, mySign);
                return true;
            }
        }
        return false;
    };
    //Get random numbers for random move
    ComputerPlayer.prototype.getRandomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return ComputerPlayer;
}(Player));
//# sourceMappingURL=ComputerPlayerClass.js.map