import {Animal} from "./animal";

export abstract class PettableAnimal implements Animal{
    private readonly _name:string;
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