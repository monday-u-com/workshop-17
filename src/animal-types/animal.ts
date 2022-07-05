export interface Animal{
    get name():string;
    get portionsRecieved():number;
    isHappy(): boolean;
    isPettable(): boolean;
    favoriteFood(): string;
    feed():void;
}


