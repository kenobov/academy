interface IScalable {
    getName:() => string
    getScale:() => number
}

class Apple implements IScalable {

    private readonly name:string = 'Apple';
    private readonly scale:number = 0;

    constructor(_scale:number) {
        this.scale = _scale;
    }

    public getName = ():string => {
        return this.name;
    }

    public getScale = ():number => {
        return this.scale
    }

}

class Tomato implements IScalable {

    private readonly name:string = 'Tomato';
    private readonly scale:number;

    constructor(_scale:number) {
        this.scale = _scale;
    }

    public getName = ():string => {
        return this.name;
    }

    public getScale = ():number => {
        return this.scale
    }

}


class Scale {

    protected products:IScalable[] = [];

    public add = (product:IScalable):void => {
        this.products.push(product)
    }

    public getSumScale = ():void => {
        console.log(this.products.reduce((acc:number, item: IScalable) => acc + item.getScale(), 0))
    }

    public getNameList = ():void => {
        console.log(this.products.map((item:IScalable) => item.getName()))
    }

}


const SCALES = new Scale();
SCALES.add(new Apple(235));
SCALES.add(new Tomato(75));
SCALES.add(new Apple(40));

SCALES.getSumScale();
SCALES.getNameList();