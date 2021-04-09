class HumanPlayer extends Player {
    private row: number;
    get Row() {
        return this.row;
    }
    set Row(r: number) {
        this.row = r;
    }
    private cell: number;
    get Cell() {
        return this.cell;
    }
    set Cell(c: number) {
        this.cell = c;
    }
    Move() {
        Game.SetCellValue(this.Row, this.Cell, this.PlayerSign);
    }
    constructor() {
        super();
        this.PlayerSign = "x";
    }
}