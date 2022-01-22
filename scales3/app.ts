const STORAGE_KEY = 'PRODUCTION';

interface IStorageEngine {
    addItem:(item:Product) => void,
    getItem:(index:number) => Product,
    getCount:() => number,
}

interface IScalable {
    getName:() => string
    getScale:() => number
}

class StorageEngineArray implements IStorageEngine {

    private array:Product[] = []

    public addItem = (item:Product) => {
        this.array.push(<Product>item);
    }

    public getItem = (index:number) => {
        if(index < this.getCount()) return this.array[index];
    }

    public getCount = () => {
        return this.array.length;
    }

}

class StorageEngineStorage implements IStorageEngine {

    private getArrayFromStorage = ():[] => {
        return localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : [];
    }

    public addItem = (item:Product) => {
        const array:Product[] = this.getArrayFromStorage();
        array.push(item);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(array));
    }

    public getItem = (index:number):Product => {
        const array:{name:string, scale:number}[] = this.getArrayFromStorage();
        if(index < this.getCount()) return new Product(array[index].name, array[index].scale);
    }

    public getCount = () => {
        const array:Product[] = this.getArrayFromStorage();
        return array.length;
    }

}

class Product implements IScalable {

    private readonly name:string = 'Product';
    private readonly scale:number;

    constructor(_name:string, _scale:number) {
        this.name = _name;
        this.scale = _scale;
    }

    public getName = ():string => {
        return this.name;
    }

    public getScale = ():number => {
        return this.scale
    }

}


class Scales {

    constructor(_storage:IStorageEngine) {
        this.storage = _storage;
    }

    private storage:IStorageEngine;

    public add = (product:Product):void => {
        this.storage.addItem(product);
    }

    public getSumScale = ():number => {
        let sum = 0;
        for(let index = 0; index < this.storage.getCount(); index++) {
            sum += this.storage.getItem(index).getScale();
        }
        return sum;
    }

    public getNameList = ():string[] => {
        const names:string[] = [];
        for(let index = 0; index < this.storage.getCount(); index++) {
            names.push(this.storage.getItem(index).getName());
        }
        return names;
    }

}

const SCALES_ARRAY = new Scales(new StorageEngineArray());
SCALES_ARRAY.add(new Product('Pear',235));
SCALES_ARRAY.add(new Product('Cucumber',400));

console.log(SCALES_ARRAY.getSumScale());
console.log(SCALES_ARRAY.getNameList());


const SCALES_STORAGE = new Scales(new StorageEngineStorage());
SCALES_STORAGE.add(new Product('Strawberry',100));
SCALES_STORAGE.add(new Product('Pineapple',320));

console.log(SCALES_STORAGE.getSumScale());
console.log(SCALES_STORAGE.getNameList());