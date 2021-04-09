class GameBoard {
    private boardIsClosed: boolean = false;
    get BoardIsClosed() {
        return this.boardIsClosed;
    }
    set BoardIsClosed(b: boolean) {
        this.boardIsClosed = b;
    }
    private winner: string = "no one";
    get Winner() {
        return this.winner;
    }
    set Winner(w: string) {
        this.winner = w;
    }
    private boardArr: string[][];
    get BoardArr() {
        return this.boardArr;
    }
    public SetCellValue(row: number, cell: number, value: string) {


        if (this.boardArr[row][cell] == undefined) {
            this.boardArr[row][cell] = value;
            this.DrawCell(value, row, cell);
        }
        else {
            throw new Error("cell is not empty");
        }


    }
    constructor() {

        this.boardArr = new Array(3);
        for (let i = 0; i < this.boardArr.length; i++) {
            this.boardArr[i] = new Array(3);
        }
    }

    IsWinner(playerSign: string): boolean {
        for (let row = 0; row < this.BoardArr.length; row++) {
            if (this.BoardArr[row][0] == playerSign && this.BoardArr[row][1] == playerSign && this.BoardArr[row][2] == playerSign) {

                return true;
            }
        }
        for (let cell = 0; cell < this.BoardArr.length; cell++) {
            if (this.BoardArr[0][cell] == playerSign && this.BoardArr[1][cell] == playerSign && this.BoardArr[2][cell] == playerSign) {

                return true;
            }
        }
        if ((this.BoardArr[0][0] == playerSign && this.BoardArr[1][1] == playerSign && this.BoardArr[2][2] == playerSign) ||
            (this.BoardArr[0][2] == playerSign && this.BoardArr[1][1] == playerSign && this.BoardArr[2][0] == playerSign)) {
            return true;
        }

        return false;
    }

    IsAllCellsSetted(a: Player, b: Player): boolean {
        let counter: number = 0;
        for (let i = 0; i < this.BoardArr.length; i++) {
            for (let j = 0; j < this.BoardArr[i].length; j++) {
                if (this.BoardArr[i][j] == a.PlayerSign || this.BoardArr[i][j] == b.PlayerSign) {
                    counter++;
                }
            }
        }
        if (counter == 9) {
            return true;
        }
        return false;
    }

    private DrawCell(value: string, row: number, cell: number) {
        let id = `${row}${cell}`;
        let td = document.getElementById(id);
        td.innerHTML = value;
        td.setAttribute('style', 'text-align:center;font-weight: bold;font-size:30px;');
        if (value == "x") {
            td.style.color = 'green'
        }
        else {
            td.style.color = 'blue';
        }
    }
}