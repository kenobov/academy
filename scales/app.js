var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getScale = function () {
            return _this.scale;
        };
        this.name = _name;
        this.scale = _scale;
    }
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_scale) {
        return _super.call(this, 'Apple', _scale) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_scale) {
        return _super.call(this, 'Tomato', _scale) || this;
    }
    return Tomato;
}(Product));
var Scale = /** @class */ (function () {
    function Scale() {
        var _this = this;
        this.products = [];
        this.add = function (product) {
            _this.products.push(product);
        };
        this.getSumScale = function () {
            console.log(_this.products.reduce(function (acc, item) { return acc + item.getScale(); }, 0));
        };
        this.getNameList = function () {
            console.log(_this.products.map(function (item) { return item.getName(); }));
        };
    }
    return Scale;
}());
var SCALES = new Scale();
SCALES.add(new Apple(235));
SCALES.add(new Tomato(75));
SCALES.add(new Apple(40));
SCALES.getSumScale();
SCALES.getNameList();
//# sourceMappingURL=app.js.map