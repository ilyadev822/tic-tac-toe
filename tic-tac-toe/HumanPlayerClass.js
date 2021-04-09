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
var HumanPlayer = /** @class */ (function (_super) {
    __extends(HumanPlayer, _super);
    function HumanPlayer() {
        var _this = _super.call(this) || this;
        _this.PlayerSign = "x";
        return _this;
    }
    Object.defineProperty(HumanPlayer.prototype, "Row", {
        get: function () {
            return this.row;
        },
        set: function (r) {
            this.row = r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HumanPlayer.prototype, "Cell", {
        get: function () {
            return this.cell;
        },
        set: function (c) {
            this.cell = c;
        },
        enumerable: false,
        configurable: true
    });
    HumanPlayer.prototype.Move = function () {
        Game.SetCellValue(this.Row, this.Cell, this.PlayerSign);
    };
    return HumanPlayer;
}(Player));
//# sourceMappingURL=HumanPlayerClass.js.map