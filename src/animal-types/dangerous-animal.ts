import {Animal} from "./animal";

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