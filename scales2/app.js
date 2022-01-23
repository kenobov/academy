var Apple = /** @class */ (function () {
    function Apple(_scale) {
        var _this = this;
        this.name = 'Apple';
        this.scale = 0;
        this.getName = function () {
            return _this.name;
        };
        this.getScale = function () {
            return _this.scale;
        };
        this.scale = _scale;
    }
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_scale) {
        var _this = this;
        this.name = 'Tomato';
        this.getName = function () {
            return _this.name;
        };
        this.getScale = function () {
            return _this.scale;
        };
        this.scale = _scale;
    }
    return Tomato;
}());
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
