
abstract class Player {


    private playerSign: string;
    get PlayerSign() {
        return this.playerSign;
    }
    set PlayerSign(v: string) {
        this.playerSign = v;
    }
    abstract Move(row: number, cell: number);

}