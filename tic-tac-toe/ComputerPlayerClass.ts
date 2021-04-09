class ComputerPlayer extends Player {
    private gameBoard: GameBoard;
    get GameBoard() {
        return this.gameBoard;
    }
    set GameBoard(g: GameBoard) {
        this.gameBoard = g;
    }
    private opponentSign: string;
    get OpponentSign() {
        return this.opponentSign;
    }
    set OpponentSign(o: string) {
        this.opponentSign = o;
    }
    Move() {   //Random Move

          try {
            Game.SetCellValue(this.getRandomNum(0, 2), this.getRandomNum(0, 2), this.PlayerSign);
  
             }
        catch {
            this.Move();
             }
       
       
    }

    TryToWinOrBlock(num: number): boolean {  //this method trying to win in diffrent ways: in across ,in rows or in cells,if success return true,else trying to block,if success return true
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
    }


    constructor() {
        super();
        this.PlayerSign = "O";
    }

    //**Private Checkers for opponent block or  try to win**/


    private OpponentBlock(): boolean {  //try to block opponent
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
    }

    
    private AcrossChekcer(mySign: string, oppSign: string = mySign): boolean {   //this generic method can check itself or combined(itself with opponent) in across
        if (this.GameBoard.BoardArr[0][0] == oppSign && this.GameBoard.BoardArr[1][1] == oppSign && this.GameBoard.BoardArr[2][2] == undefined) {

            Game.SetCellValue(2, 2, mySign);
            return true
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
    }
    private ColumnChecker(mySign: string, oppSign: string = mySign) {   //this generic method can check itself or combined(itself with opponent) in columns
        for (let cell = 0; cell < this.GameBoard.BoardArr.length; cell++) {
            if (this.GameBoard.BoardArr[0][cell] == oppSign && this.GameBoard.BoardArr[1][cell] == oppSign && this.GameBoard.BoardArr[2][cell] == undefined) {
                this.GameBoard.SetCellValue(2, cell, mySign);
                return true;
            }
            else if (this.GameBoard.BoardArr[1][cell] == oppSign && this.GameBoard.BoardArr[2][cell] == oppSign && this.GameBoard.BoardArr[0][cell] == undefined) {
                this.GameBoard.SetCellValue(0, cell, mySign);
                return true;
            }
            else if (this.GameBoard.BoardArr[0][cell] == oppSign && this.GameBoard.BoardArr[2][cell] == oppSign && this.GameBoard.BoardArr[1][cell] == undefined) {
                this.GameBoard.SetCellValue(1, cell, mySign);
                return true;
            }
        }
        return false;
    }
    private RowChecker(mySign: string, oppSign: string = mySign) { //this generic method can check itself or combined(itself with opponent) in rows
        for (let row = 0; row < this.GameBoard.BoardArr.length; row++) {
            if (this.GameBoard.BoardArr[row][0] == oppSign && this.GameBoard.BoardArr[row][1] == oppSign && this.GameBoard.BoardArr[row][2] == undefined) {
                this.GameBoard.SetCellValue(row, 2, mySign);
                return true;
            }
            else if (this.GameBoard.BoardArr[row][1] == oppSign && this.GameBoard.BoardArr[row][2] == oppSign && this.GameBoard.BoardArr[row][0] == undefined) {
                this.GameBoard.SetCellValue(row, 0, mySign);
                return true;
            }
            else if (this.GameBoard.BoardArr[row][0] == oppSign && this.GameBoard.BoardArr[row][2] == oppSign && this.GameBoard.BoardArr[row][1] == undefined) {
                this.GameBoard.SetCellValue(row, 1, mySign);
                return true;
            }
        }

        return false;
    }
    //Get random numbers for random move
    private getRandomNum(min, max): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    
}

