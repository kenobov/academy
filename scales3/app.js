var STORAGE_KEY = 'PRODUCTION';
var StorageEngineArray = /** @class */ (function () {
    function StorageEngineArray() {
        var _this = this;
        this.array = [];
        this.addItem = function (item) {
            _this.array.push(item);
        };
        this.getItem = function (index) {
            if (index < _this.getCount())
                return _this.array[index];
        };
        this.getCount = function () {
            return _this.array.length;
        };
    }
    return StorageEngineArray;
}());
var StorageEngineStorage = /** @class */ (function () {
    function StorageEngineStorage() {
        var _this = this;
        this.getArrayFromStorage = function () {
            return localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : [];
        };
        this.addItem = function (item) {
            var array = _this.getArrayFromStorage();
            array.push(item);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(array));
        };
        this.getItem = function (index) {
            var array = _this.getArrayFromStorage();
            if (index < _this.getCount())
                return new Product(array[index].name, array[index].scale);
        };
        this.getCount = function () {
            var array = _this.getArrayFromStorage();
            return array.length;
        };
    }
    return StorageEngineStorage;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        var _this = this;
        this.name = 'Product';
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
var Scales = /** @class */ (function () {
    function Scales(_storage) {
        var _this = this;
        this.add = function (product) {
            _this.storage.addItem(product);
        };
        this.getSumScale = function () {
            var sum = 0;
            for (var index = 0; index < _this.storage.getCount(); index++) {
                sum += _this.storage.getItem(index).getScale();
            }
            return sum;
        };
        this.getNameList = function () {
            var names = [];
            for (var index = 0; index < _this.storage.getCount(); index++) {
                names.push(_this.storage.getItem(index).getName());
            }
            return names;
        };
        this.storage = _storage;
    }
    return Scales;
}());
var SCALES_ARRAY = new Scales(new StorageEngineArray());
SCALES_ARRAY.add(new Product('Pear', 235));
SCALES_ARRAY.add(new Product('Cucumber', 400));
console.log(SCALES_ARRAY.getSumScale());
console.log(SCALES_ARRAY.getNameList());
var SCALES_STORAGE = new Scales(new StorageEngineStorage());
SCALES_STORAGE.add(new Product('Strawberry', 100));
SCALES_STORAGE.add(new Product('Pineapple', 320));
console.log(SCALES_STORAGE.getSumScale());
console.log(SCALES_STORAGE.getNameList());
