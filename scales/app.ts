class Product {

    public name:string;
    public scale:number;

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

class Apple extends Product {

    constructor(_scale:number) {
        super('Apple', _scale);
    }

}

class Tomato extends Product {

    constructor(_scale:number) {
        super('Tomato', _scale);
    }

}


class Scale {

    protected products:Product[] = [];

    public add = (product:Product):void => {
        this.products.push(product)
    }

    public getSumScale = ():void => {
        console.log(this.products.reduce((acc:number, item: Product) => acc + item.getScale(), 0))
    }

    public getNameList = ():void => {
        console.log(this.products.map((item:Product) => item.getName()))
    }

}


const SCALES = new Scale();
SCALES.add(new Apple(235));
SCALES.add(new Tomato(75));
SCALES.add(new Apple(40));

SCALES.getSumScale();
SCALES.getNameList();