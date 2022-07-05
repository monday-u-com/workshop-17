export interface Animal{
    get name():string;
    get portionsRecieved():number;
    isHappy(): boolean;
    isPettable(): boolean;
    favoriteFood(): string;
    feed():void;
}

export abstract class DangerousAnimal implements Animal{
    readonly name: string;
    private _portionsRecieved: number;

    protected constructor(name: string) {
        this.name = name;
        this._portionsRecieved = 0;
    }

    isPettable(): boolean{
        return false;
    };

    feed(){
        this._portionsRecieved++;
    }

    get portionsRecieved(): number {
        return this._portionsRecieved;
    }

    abstract isHappy(): boolean;
    public abstract favoriteFood(): string;

}

export abstract class PettableAnimal implements Animal{
    private _name:string;
    private _lastPettingTime: number;
    private _portionsRecieved: number;

    constructor(name: string) {
        this._name = name;
        this._portionsRecieved = 0;
    }

    get name(){
        return this._name;
    }
    isPettable(): boolean{
        return true;
    };

    feed(){
        this._portionsRecieved++;
    }

    get lastPettingTime(): number {
        return this._lastPettingTime;
    }


    get portionsRecieved(): number {
        return this._portionsRecieved;
    }

    public pet() {
        this._lastPettingTime = Date.now();
    }

    abstract isHappy(): boolean;
    public abstract favoriteFood(): string;

}